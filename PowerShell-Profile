Custom PowerShell start settings
=====
- remove Welcome message
- show current path
- set a simple prompt

# edit the file ` code $profile `
```powershell
cls
Set-Location ~/source/repos
pwd

function prompt{
    $p = Split-Path -Leaf -Path (Get-Location)
    # "$p> "
    "PS> "
    #"$pwd".Split('\')[-1] + '> '
}
```
