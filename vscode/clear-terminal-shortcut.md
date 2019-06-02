### Custom keyboard shortcut for "Terminal: Clear" command in VS Code

In Visual Studio Code (VS-Code) PowerShell terminal window, you can use shortcut key (Ctrl+L) to clear current screen. But the output buffer is not cleared, so if you scroll mouse up, they are all back.

There are 2 ways to clear output buffer and screen:
  - PowerShell command: cls / clear/ Clear / Clear() / [System.Console]::Clear(); 
  - VS-Code command palette - Terminal: Clear

Here is how to set a cusomer shortcut key for that, click Menu:

-  File > Preferences > Keyboard Shortcuts (Ctrl K, S)
- search keyword: terminal clear
- click to locate the one with command name - Terminal: Clear
- in the left side, there is Pen Icon (Ctrl K, Ctrl K), click to open a small dialog window, let you put your shortcut key.
- press Ctrl Shift L
- enter

You may want to set a scope for the shortcut key, say only works in the terminal window. In up right corner, click the Brackets-pair icon to Open Keyboard Shortcuts (JSON). The files is in 
> C:\Users\YOUR-NAME\AppData\Roaming\Code\User\keybindings.json

add scope context like the below:

```json
[
    {
        "key": "ctrl+shift+l",
        "command": "workbench.action.terminal.clear",
        "when": "terminalFocus"
    }
]

```
