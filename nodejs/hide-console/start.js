const fs = require('fs');

console.log('test');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms ));
}

function hideSelf() {

    let powershellScript = `
    Add-Type -Name Window -Namespace Console -MemberDefinition '
    [DllImport("Kernel32.dll")]
    public static extern IntPtr GetConsoleWindow();

    [DllImport("user32.dll")]
    public static extern bool ShowWindow(IntPtr hWnd, Int32 nCmdShow);
    '

    $consolePtr = [Console.Window]::GetConsoleWindow()
    #0 hide
    [Console.Window]::ShowWindow($consolePtr, 0)
    `;

    let workingDir = process.cwd();
    let tempfile = `${workingDir}\\temp.ps1`;
    fs.writeFileSync(tempfile, powershellScript);

    //a little convoluted to get around powershell script execution policy (might be disabled)
    require('child_process').execSync(`type .\\temp.ps1 | powershell.exe -noprofile -`, {stdio: 'inherit'});
    fs.unlinkSync(tempfile); //delete temp file
}

(async () => {
    await sleep(2000);
    console.log('pasaron 30 segundos');
    hideSelf();
    await sleep(2000);
    console.log('pasaron 30 segundos');
    await sleep(2000);
    console.log('pasaron 30 segundos');
    await sleep(2000);
    console.log('pasaron 30 segundos');
})();

