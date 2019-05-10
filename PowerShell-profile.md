Custom PowerShell start settings
=====
- remove Welcome message
- show current path
- set a simple prompt

# edit the file ` code $profile `
```powershell
cls
Set-Location ~/source/repos
echo (Split-Path -Path (Get-Location))

function prompt{
    "PS> "

    #$p = Split-Path -Leaf -Path (Get-Location)
    #"$p> "
}
```
