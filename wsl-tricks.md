Windows 10 WSL tricks
=====

### remove Windows path from WSL Linux $PATH
  > PATH=$(/usr/bin/printenv PATH | /usr/bin/perl -ne 'print join(":", grep { !/\/mnt\/[a-z]/ } split(/:/));')
