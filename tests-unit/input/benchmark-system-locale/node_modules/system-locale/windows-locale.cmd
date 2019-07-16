@echo off &setlocal
for /f "tokens=2*" %%a in ('reg query "HKEY_USERS\.DEFAULT\Control Panel\International" /v LocaleName') do set "var=%%b"
echo %var%
