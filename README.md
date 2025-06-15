# Visual Studio Code Cruft Extension

Creates projects from Cookiecutter templates using cruft.

## Features

- Create projects from cookiecutter templates URLs using cruft.

## Requirements

- [cruft](https://cruft.github.io/cruft/)

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `cruft.templates`: Array of template name and the corresponding URL.

```json
"cruft.templates": [
    {
        "name": "My Template",
        "url": "https://github.com/user/my-template"
    }
]
```

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

### 0.1.0

- Support creating projects from template URL

