# Bristol — Headless WordPress + Next.js

## Architecture

```
KingHost VPS
├── WordPress (bristolbr.com.ar)   ← CMS / REST API backend
│   └── wp-json/wp/v2/             ← consumed by Next.js
└── Next.js (bristolbr.com.ar)     ← React frontend (PM2 + Nginx)
```

---

## 1. WordPress — Headless configuration

### 1.1 Enable REST API & CORS

Add to `wp-config.php` (above `/* That's all, stop editing! */`):

```php
// Allow Next.js frontend to call the REST API
define('ALLOW_UNFILTERED_UPLOADS', false);
```

Add to your theme's `functions.php` or a must-use plugin:

```php
add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
        $allowed = ['https://bristolbr.com.ar', 'http://localhost:3000'];
        if (in_array($origin, $allowed, true)) {
            header('Access-Control-Allow-Origin: ' . $origin);
            header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type');
        }
        return $value;
    });
});
```

### 1.2 Install WP REST Menu Items plugin

The navigation menu uses the `wp-json/wp/v2/menu-items` endpoint, available since WP 5.9.
No plugin required if your WordPress is ≥ 5.9.

### 1.3 Recommended plugins

| Plugin | Purpose |
|---|---|
| **Yoast SEO** | Already installed — SEO meta is fetched via `yoast_head_json` |
| **Contact Form 7** | Keep for fallback; Next.js has its own `/api/contact` route |
| **WP2Static** or nothing | WordPress stays live as API — no extra plugin needed |

---

## 2. Next.js — Local development

```bash
cd bristol-nextjs
cp .env.local.example .env.local
# Edit .env.local — set NEXT_PUBLIC_WP_API_URL=https://bristolbr.com.ar

npm install
npm run dev        # http://localhost:3000
```

---

## 3. Production deployment on KingHost VPS (PM2 + Nginx)

### 3.1 Build

```bash
npm run build
```

### 3.2 Start with PM2

```bash
npm install -g pm2
pm2 start npm --name bristol-nextjs -- start
pm2 save
pm2 startup    # follow printed instructions to survive reboots
```

### 3.3 Nginx config (HTTPS via Certbot)

```nginx
server {
    listen 80;
    server_name bristolbr.com.ar www.bristolbr.com.ar;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name bristolbr.com.ar www.bristolbr.com.ar;

    ssl_certificate     /etc/letsencrypt/live/bristolbr.com.ar/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/bristolbr.com.ar/privkey.pem;

    # Next.js app
    location / {
        proxy_pass         http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # WordPress REST API — proxy so the frontend can call /wp-json without CORS issues
    location /wp-json/ {
        proxy_pass https://bristolbr.com.ar/wp-json/;
        proxy_set_header Host bristolbr.com.ar;
    }

    # Next.js static assets
    location /_next/static/ {
        alias /var/www/bristol-nextjs/.next/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 4. Hero slider images

Place your slider images in `bristol-nextjs/public/`:

```
public/
  hero-1.jpg   ← main hero slide
  hero-2.jpg   ← second slide
  about.jpg    ← about section
  logo.png     ← header logo (color)
  logo-white.png  ← footer logo (or leave as logo.png + CSS invert)
```

Alternatively, once you migrate the LayerSlider data, update `src/app/page.tsx`
to fetch slides from a custom WP endpoint.

---

## 5. Contact form email delivery

Edit `src/app/api/contact/route.ts` and uncomment the **Nodemailer** block,
then configure in `.env.local`:

```
SMTP_HOST=mail.bristolbr.com.ar
SMTP_PORT=587
SMTP_USER=ventas@bristolbr.com.ar
SMTP_PASS=your-password
CONTACT_TO_EMAIL=ventas@bristolbr.com.ar
```

---

## 6. Environment variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_WP_API_URL` | Yes | WordPress URL, no trailing slash |
| `WP_HOSTNAME` | Yes | Same hostname (for next/image domains) |
| `NEXT_PUBLIC_SITE_URL` | Yes | Production frontend URL |
| `CONTACT_TO_EMAIL` | For email | Destination email for contact form |
| `SMTP_HOST/PORT/USER/PASS` | For email | SMTP credentials |
| `WP_CF7_FORM_ID` | Optional | CF7 form ID if routing through WP |
| `RDSTATION_TOKEN` | Optional | RD Station public token |
