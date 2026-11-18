@echo off
set "HTML=%~dp0index.html"
start msedge --app="file:///%HTML:\=/%" --window-size=1150,780
if errorlevel 1 (
    start "" "%HTML%"
)
exit
