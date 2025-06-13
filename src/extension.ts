import * as vscode from 'vscode';

interface TemplateConfig {
  name: string;
  url: string;
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('cruft.createProject', async () => {
      const templates = vscode.workspace.getConfiguration().get<TemplateConfig[]>('cruft.templates') || [];

      if (templates.length === 0) {
        vscode.window.showErrorMessage('No templates configured. Please add template configurations in settings.');
        return;
      }

      const selectedName = await vscode.window.showQuickPick(
        templates.map(t => t.name),
        { placeHolder: 'Select a template' }
      );

      if (!selectedName) return;

      const selectedTemplate = templates.find(t => t.name === selectedName);
      if (!selectedTemplate) return;

      const folder = await vscode.window.showOpenDialog({
        canSelectFolders: true,
        openLabel: 'Select target folder'
      });

      if (!folder || folder.length === 0) return;

      const targetPath = folder[0].fsPath;

      // Open a terminal and run the cruft command interactively
      const terminal = vscode.window.createTerminal('Cruft Create');
      terminal.show();
      terminal.sendText(`cruft create ${selectedTemplate.url} --output-dir "${targetPath}"`);
    })
  );
}

export function deactivate() {}