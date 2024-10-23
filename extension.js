const vscode = require('vscode');

function activate(context) {
    let toggleGitCommand = vscode.commands.registerCommand('extension.toggleGitEnabled', async function () {
        const gitEnabled = vscode.workspace.getConfiguration('git').get('enabled');
        await vscode.workspace.getConfiguration('git').update('enabled', !gitEnabled, true);
        vscode.window.showInformationMessage(`Git Enabled: ${!gitEnabled}`);
    });

    context.subscriptions.push(toggleGitCommand);

    let disablePluginCommand = vscode.commands.registerCommand('extension.disablePlugin', async function () {
        await vscode.extensions.getExtension('your.extension.id').deactivate();
        vscode.window.showInformationMessage('The plugin has been disabled');
    });

    context.subscriptions.push(toggleGitCommand);
    context.subscriptions.push(disablePluginCommand);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
