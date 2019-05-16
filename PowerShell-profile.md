Custom PowerShell start settings
=====
- remove Welcome message
- show current path
- set a simple prompt

# edit the file ` code $profile `
```powershell


function prompt{
    ## simple version
    $prompt = "PS"
    
    ## or just current directory name (not full path)
    #$prompt = Split-Path -Leaf -Path (Get-Location)

    "$prompt> "
}

cls
'' + (pwd)

```
