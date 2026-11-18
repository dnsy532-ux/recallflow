@echo off
chcp 65001 > nul
setlocal

set SCRIPT_DIR=%~dp0
set TARGET_BAT=%SCRIPT_DIR%start.bat
set SHORTCUT_NAME=RecallFlow (暗記アプリ).lnk

powershell -NoProfile -Command ^
  "$ws = New-Object -ComObject WScript.Shell; " ^
  "$desktop = [Environment]::GetFolderPath('Desktop'); " ^
  "$s = $ws.CreateShortcut((Join-Path $desktop '%SHORTCUT_NAME%')); " ^
  "$s.TargetPath = '%TARGET_BAT%'; " ^
  "$s.WorkingDirectory = '%SCRIPT_DIR%'; " ^
  "$s.Description = 'RecallFlow - 忘却曲線・間隔反復暗記アプリ'; " ^
  "$s.Save()"

echo デスクトップにショートカットを作成しました: %SHORTCUT_NAME%
pause
