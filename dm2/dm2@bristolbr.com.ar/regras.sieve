require ["fileinto", "envelope" ,"editheader" , "regex", "variables"];

# rule:[Whitelist pass]
if header :contains "X-Whitelisted-By" ""{
	stop;
}

# rule:[Drop Virus]
if header :contains "X-SpamExperts-Class" "virus"{
	discard;
	stop;
}

# rule:[Drop Phish]
if header :contains "X-SpamExperts-Class" "phish"{
	discard;
	stop;
}

# rule:[Libera se bloquear KINGHOST]
if header :regex "X-SpamExperts-Evidence" "(.*)kinghost(.*)"{
	stop;
}

# rule:[Move Spam para pasta Spam]
if header :contains "X-Recommended-Action" "reject"{
	if header :regex "subject" "(.*)" {
		deleteheader "Subject";
		addheader "Subject" "[SPAM] ${1}";
	}
	fileinto "INBOX.Spam";
	stop;
}

# rule RspamD:[Move Spam para pasta Spam]
if header :contains "X-Spam" "Yes"{
	if header :regex "subject" "(.*)" {
		deleteheader "Subject";
		addheader "Subject" "[SPAM] ${1}";
	}
	fileinto "INBOX.Spam";
	stop;
}
