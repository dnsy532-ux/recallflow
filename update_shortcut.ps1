$ws = New-Object -ComObject WScript.Shell
$desktop = [Environment]::GetFolderPath('Desktop')
$shortcutPath = Join-Path $desktop 'RecallFlow (暗記アプリ).lnk'
$s = $ws.CreateShortcut($shortcutPath)
$s.TargetPath = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
$s.Arguments = '--app="file:///C:/Users/dnsy5/.gemini/antigravity/scratch/recallflow/index.html" --window-size=1150,780'
$s.WorkingDirectory = 'C:\Users\dnsy5\.gemini\antigravity\scratch\recallflow'
$s.Description = 'RecallFlow - 忘却曲線暗記アプリ'
$s.Save()
Write-Host "Shortcut created successfully."
