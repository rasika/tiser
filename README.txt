###############################################################################
		                       -=tiSER beta 1.0=-                
                       Copyright (C) 2011 G.Rasika Perera.
                                 All rights reserved.
                                   31/07/2011
###############################################################################
Following is information regarding TiSER(ver. beta 1.0).
Please read before using this application.

-DESCRIPTION
============
  TiSER beta 1.0 is a light-weight, free and open source Web Server-like.
  It's based on the python language and works on Linux Based Operating
  systems like Ubuntu as well as on Windows.

-FEATURES
========
	-All errors are written to a file called 'ErrorReport.txt' in the 
	 same directory.

	-Many HTTP status codes are handled. 

	-if favicon.ico the request which sent by web browser to get icon 
	 is exists sends it, or ignore it without sending 404 Not Found error.
 

-SYSTEM REQUIREMENTS
====================

-OS
Recommended: Linux distro OR
Microsoft Windows 98 / Windows 98
Second Edition / Windows 2000 Professional / Windows Millennium Edition /
Windows XP Home Edition/ Windows XP Professional pre-installed

-CPU
Intel Pentium III 500MHz or above (Pentium 4 1.3GHz or above recommended)

-Memory
128MB or more (256MB or above recommended)

-Other
To run this software you need to install python.python can download from following link.
http://www.python.org/download/releases/2.7/

-INSTALLATION INSTRUCTIONS (Unix/Linux/Ubuntu)
=====================================
1. UNZIP tiSER.zip FILE
After downloading tiSER.zip  start terminal.And goto the downloaded location.
	if it is in Desktop you have to type,
		cd /home/<yourname>/Desktop 
		unzip tiSER.zip

2. GOTO UNZIPPED FILE
	If you have successfully unzipped, 

3. RUN SERVER SCRIPT FROM TERMINAL
	python Wserver <port>
	Note: <port> is an integer value 0-65535
	      If server started a welcome message will printed in terminal.
4. START WEB BROWSER
	Start web browser, In the address bar type,
		http://localhost:8000

	Note: To give belaw ports numbers 1023, you have to get root permissions.
	      to get root permissions, if you are in the terminal type,
	      'sudo su' (without quatations) and give password.Otherwise you will
	      get an error 'Permission dinied'.


-DOCUMENTATION
==============
  Note: the tiSER starts with basic settings when no regular expression syntax.

-Keyboard Shortcuts
press CTRL+C to terminate server.

-Regular Expression Syntax
  Wserver <port> 

  <port> - Can give any port as web servers port.(port should be an integer).

-HOW TO CONFIG
==============
tiSER uses Configuration file(config.xml) to load configurations.
 If 'config.xml' file not found.Following default values are applied.
 	HOST = '' [listen and accept all clients]
 	WEBROOT = <Current Directory>
 	MAX_CLIENT_NUM=5
 	MAX_REQST_SIZE=1024
 
 Structure of the config.xml
	<tiser>
	<HOST value='' />
	<WEBROOT value='www' />
	<MAX_CLIENT_NUM value='10' />
	<MAX_REQST_SIZE value='1024' />
	</tiser>

-COPY RIGHT
===========

  tiSER is FREE SOFTWARE and may be used and distributed freely.
  Please do not charge any distribution or download fees for this
  program, except for the cost of the distribution medium. The use of
  this software is AT YOUR OWN RISK.

-USER SUPPORT
=============

Home Page : http://www.tiser.limewebs.com/
Telephone : +94-7-168-09060

Copyright(c)2011,G. Rasika Perera.All rights reserved.
