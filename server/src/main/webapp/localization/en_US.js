if (! document.localization) document.localization = [];

document.localization ['en_US'] = {
    'login.username': 'Username or email',
    'login.username.placeholder': 'Enter your username or email',
    'login.password': 'Password:',
    'login.password.placeholder': 'Enter password',
    'login.submit': 'Login',
    'login.password.incorrect': 'Invalid username or password',

    'header.label.username': 'Username',

    'devices.group.options.all': 'All groups',
    'devices.configuration.options.all': 'All configurations',
    'devices.permissions.all': 'All permissions are granted',
    'devices.permissions.not.as.device.admin': '- The application is not installed as a device administrator',
    'devices.permissions.window.overlap.prohibited': '- Overlay on top of other windows is not available',
    'devices.permissions.history.access.prohibited': '- Access to usage history is not configured',
    'devices.unknown': 'Unknown',
    'devices.model.unknown': 'Unknown',
    'devices.date.unknown': 'unknown',
    'devices.date.format': 'dd/MM HH:mm',
    'devices.app.installed': '- ${applicationName}: Installed.',
    'devices.app.not.installed': '- ${applicationName}: not installed.',
    'devices.app.version.available': ', available ${applicationVersion}',
    'devices.app.installed.and.version.available': '- ${applicationName}: installed ${applicationInstalledVersion}, available ${applicationVersionAvailable}',
    'devices.app.needs.removal': '${applicationVersion}, removal is required',
    'devices.no.data': 'The device has not transmitted data',
    'devices.settings.conformance.broken': 'Mismatch with settings: (${serverData})',
    'devices.file.installed': '- ${file}: installed',
    'devices.file.not.installed': '- ${file}: not installed.',
    'devices.file.lastUpdate.differs': '- ${file}: difference in modification time ${diff} min',

    'button.apply': 'Apply',
    'button.gps.on': 'Enable GPS',
    'button.wifi.on': 'Enable Wi-Fi',
    'button.notify.update': 'Notify on update',
    'button.app.settings': 'Application settings',
    'button.ok': 'OK',
    'button.help': 'Help',
    'button.new.app': 'New application',
    'button.new.app.version': 'New version',
    'button.upgrade': 'Upgrade',
    'button.renew.config': 'Update on devices',
    'button.common': 'Common application',
    'button.close': 'Close',
    'button.yes': 'Yes',
    'button.cancel': 'Cancel',
    'button.save': 'Save',
    'button.save.and.close': 'Save and close',
    'button.more': 'More ...',
    'button.cleanup': 'Clear',
    'button.add': 'Add',
    'button.add.icon': 'New Icon',
    'button.search': 'Search',
    'button.export': 'Export',
    'button.change': 'Edit',
    'button.copy': 'Copy',
    'button.qrcode': 'QR code',
    'button.application': 'Application',
    'button.change.password': 'Change password',
    'button.set.configuration': 'Set configuration',
    'button.delete': 'Delete',
    'button.login': 'Login',
    'button.renew.code': 'Renew',
    'button.configurations': 'Configurations',
    'button.set.configurations': 'Specify Configurations',
    'button.edit.versions': 'Versions',
    'button.edit': 'Edit',
    'button.change.common.app': 'Edit Shared Application',
    'button.delete.common.app': 'Delete Shared Application',
    'button.turn.common.app': 'Make Common',
    'button.hints.enable': 'Show tooltips',
    'button.hints.disable': 'Hide tooltips',
    'button.show.password': 'Show password',
    'button.hide.password': 'Hide password',

    'question.impersonate.user': 'Log in to the application as the administrator of the organization "${customerName}"?',
    'question.delete.file': 'Delete file "${fileName}"?',
    'question.delete.customer': 'Delete organization "${customerName}"?',
    'question.delete.user': 'Delete user "${username}"?',
    'question.delete.application': 'Delete application "${applicationName}"?',
    'question.delete.application.version': 'Delete version "${applicationVersion}"?',
    'question.delete.configuration': 'Delete configuration "${configurationName}"??',
    'question.delete.group': 'Delete group "${groupName}"?',
    'question.delete.device': 'Delete the device with the number "${deviceNumber}"?',
    'question.exit.without.saving': 'Changes are not saved. Anyway leave this page?',
    'question.turn2common.application': 'Share the application "${applicationName}"?',
    'question.app.upgrade': 'Update application "${v1}" to latest version for configuration "${v2}"?',

    'error.application.setting.empty.app': 'Specify application',
    'error.application.setting.empty.name': 'Enter a name',
    'error.application.setting.empty.value': 'Specify a value',

    'error.icon.dimension.invalid': 'Icon must be square',
    'error.icon.empty.name': 'Enter the name of the icon',
    'error.icon.empty.file': 'Upload icon file',
    'error.application.version.pkg.mismatch': 'Package ID of the file (${actual}) does not correspond to the application (${expected})',
    'error.empty.user': 'Select a user',
    'error.empty.user.name': 'Fill in the username',
    'error.empty.user.login': 'Fill in the user login',
    'error.empty.user.role': 'Select a user role',
    'error.empty.password': 'Enter new password',
    'error.empty.password.confirm': 'Enter password confirmation',
    'error.empty.group.name': 'Fill in the group name',
    'error.empty.configuration': 'Specify the configuration',
    'error.empty.configuration.name': 'Fill in the configuration name',
    'error.empty.configuration.password': 'Fill in the password',
    'error.empty.configuration.contentApp': 'No content application specified',
    'error.invalid.configuration.mainApp': 'In the MDM settings, the wrong main application is used',
    'error.invalid.configuration.contentApp': 'Invalid content application used in MDM settings',
    'error.mismatch.password': 'Password and password confirmation must match',
    'error.empty.customer.name': 'Fill in the name of the organization',
    'error.empty.customer.prefix': 'Fill in the device number prefix',
    'error.empty.customer.device.configuration': 'Select device configuration',
    'error.empty.customer.duplicate.prefix': 'Prefix already in use',
    'error.duplicate.customer.name': 'The organization with the entered name already exists. Try a different name.',
    'error.duplicate.group.name': 'The group with the entered name already exists. Try a different name.',
    'error.duplicate.configuration.name': 'The configuration with the entered name already exists. Try a different name.',
    'error.duplicate.device.number': 'A device with this number already exists',
    'error.internal.server': 'Internal server error',
    'error.permission.denied': 'No rights to execute',
    'error.request.failure': 'Request failure',
    'error.configuration.device.use': 'Cannot delete this configuration, it is used on devices. First go to "Devices", find the devices using this configuration and change their settings.',
    'error.invalid.system.update.time': 'Invalid installation interval',

    'error.configuration.file.empty.name': 'Enter a file name',
    'error.configuration.file.empty.desc': 'Specify a file description',
    'error.configuration.file.empty.path': 'Specify the path on the device',
    'error.configuration.file.empty.file': 'Enter a URL or upload a file',
    
    'error.notfound.device': 'Device not found',
    'error.duplicate.device': 'A device with the same number already exists',
    'error.duplicate.login': 'Such a login is already in use',
    'error.duplicate.group': 'A group with the same name already exists',
    'error.duplicate.application': 'An application with this package ID and version already exists',
    'error.recent.application.version.exists': 'More recent application version exists',
    'error.common.application.access.prohibited': 'Managing of the common applications is allowed by Super-Administrator only',
    'error.application.config.reference.exists': 'The application is used in configurations and cannot be deleted',
    'error.application.version.deletion.prohibited': 'The version is either unique or used in configurations and cannot be deleted',
    'error.duplicate.file': 'A file with the same name already exists',
    'error.used.file': 'This file is used',
    'error.version.exists': 'The same version of this app already exists',
    'error.duplicate.configuration': 'A configuration with this name already exists',
    'error.notfound.customer.admin': 'Administrator account not found',
    'error.apk.file.required': 'Select the file with the .apk or .xapk extension',
    'error.apk.parse': 'An error occurred while parsing the file',
    'error.empty.app.name': 'Enter application name',
    'error.empty.app.pkg': 'Enter the package ID',
    'error.empty.app.url': 'Enter the URL',
    'error.empty.app.iconText': 'Enter the icon text',
    'error.empty.app.version': 'Enter the version of the application',
    'error.notempty.group': 'This group includes one or more devices. You cannot remove it.',
    'error.file.empty': 'Upload a new file',
    'error.file.deletion': 'Error deleting file on server',
    'error.file.save': 'Error while saving file on server',
    'error.password.wrong': 'Invalid password',
    'error.password.empty': 'Password not specified',
    'error.params.missing': 'Missing parameters:',
    'error.empty.push.options': 'Please select the Push notifications options',

    'table.filtering.check.all': 'Select All',
    'table.filtering.uncheck.all': 'Cancel All',
    'table.filtering.suffix.configuration': 'configurations',
    'table.filtering.suffix.group': 'groups',
    'table.filtering.no.selected.configuration': 'No configurations selected',
    'table.filtering.no.selected.group': 'No selected groups',

    'success.admin.created': 'Administrator account created:\n ${adminCredentials}',
    'success.uploading.file': 'The file is uploaded to the server ...',
    'success.loading.devices': 'Loading device list ...',
    'success.loading.customer': 'Loading customer details ...',
    'success.file.uploaded': 'File uploaded successfully.',
    'success.file.uploaded.need.save': 'File uploaded successfully. Enter the relative path and click "Save".',
    'success.settings.design.saved': 'Design settings saved successfully',
    'success.settings.common.saved': 'Device table settings saved successfully',
    'success.settings.saved': 'Settings saved successfully',
    'success.settings.apiKey.saved': 'API key saved successfully',
    'success.settings.hints.enabled': 'Hints enabled',
    'success.settings.hints.disabled': 'Hints disabled',
    'success.configuration.saved': 'Configuration saved successfully',
    'success.operation.completed': 'Operation completed successfully',
    'success.plugins.disabled': 'Settings saved successfully',
    'success.config.update.notification': 'Configuration update command has been sent to devices',
    'success.config.update.device.app.settings.notification': 'The command to update application settings has been sent to the device.',

    'form.icon.title': 'Icon',
    'form.icon.name': 'Name',
    'form.icon.file': 'File',

    'form.configuration.title': 'Configuration',
    'form.configuration.title.typical': 'Typical configuration',
    'form.configuration.settings.auto.update': 'Auto-Update',
    'form.configuration.settings.system.update': 'System Update',
    'form.configuration.settings.system.update.default': 'Default',
    'form.configuration.settings.system.update.immediate': 'Immediately',
    'form.configuration.settings.system.update.scheduled': 'Scheduled',
    'form.configuration.settings.system.update.postponed': 'Postponed',
    'form.configuration.settings.system.update.time': 'Installation time',
    'form.configuration.settings.system.update.time.from': 'from:',
    'form.configuration.settings.system.update.time.to': 'to:',
    'form.configuration.settings.block.status.bar': 'Status bar lock',
    'form.configuration.settings.mdm.kiosk.mode': 'Kiosk Mode',
    'form.configuration.settings.mdm.app.main': 'Main Application',
    'form.configuration.settings.mdm.component.event.receiver': 'Component - event recipient',
    'form.configuration.settings.mdm.component.event.receiver.placeholder': 'Enter the name of the component',
    'form.configuration.settings.mdm.component.wifi.ssid': 'WiFi SSID',
    'form.configuration.settings.mdm.component.wifi.ssid.placeholder': 'Enrollment WiFi SSID - leave empty to enter manually',
    'form.configuration.settings.mdm.component.wifi.password': 'WiFi password',
    'form.configuration.settings.mdm.component.wifi.password.placeholder': 'Enrollment WiFi pass - leave empty to enter manually',
    'form.configuration.settings.mdm.component.wifi.security': 'WiFi security type',
    'form.configuration.settings.mdm.component.server.url': 'New server URL',
    'form.configuration.settings.mdm.component.server.url.placeholder': 'Used for migration to a new MDM server',
    'form.configuration.settings.mdm.app.content': 'Content Application',
    'form.configuration.settings.mdm.kiosk.home': 'Enable Home button',
    'form.configuration.settings.mdm.kiosk.recents': 'Enable Recents button',
    'form.configuration.settings.mdm.kiosk.notifications': 'Enable notifications',
    'form.configuration.settings.mdm.kiosk.system.info': 'Enable status bar info',
    'form.configuration.settings.mdm.kiosk.keyguard': 'Enable screen lock',
    'form.configuration.settings.mdm.lock.safe.settings': 'Lock safe settings (WiFi, GPS, etc)',
    'form.configuration.settings.mdm.allowed.classes': 'Allowed activities',
    'form.configuration.settings.mdm.allowed.classes.placeholder': 'Comma-separated classes, e.g.: com.android.settings.homepage.SettingsHomepageActivity',
    'form.configuration.settings.mdm.qrcode.url': 'QR code URL',
    'form.configuration.settings.mdm.hint': 'Select the main application and component',
    'form.configuration.apps.search.label': 'Search for:',
    'form.configuration.apps.sort.label': 'Sort:',
    'form.configuration.apps.sort.byname': 'By name',
    'form.configuration.apps.sort.bypkg': 'By ID',
    'form.configuration.apps.show.systeam.apps': 'Show System Applications',
    'form.configuration.apps.action.install': 'Install',
    'form.configuration.apps.action.prohibit': 'Block',
    'form.configuration.apps.action.not.install': 'Do not install',
    'form.configuration.apps.action.delete': 'Delete',
    'form.configuration.apps.action.permit': 'Allow',
    'form.configuration.apps.label.inherit': 'Inherited',
    'form.configuration.apps.label.show': 'Show',
    'form.configuration.apps.label.not.show': 'Hide',
    'form.configuration.apps.edit.details': 'Additional parameters',
    'form.configuration.apps.keycode': 'Key code',
    'form.configuration.apps.hint': 'Hint: to unlink the app from the configuration, select the action "Block" or "Do not install".',
    'form.configuration.settings.design.use.default': 'Use default design',
    'form.configuration.settings.design.color.background': 'Background Color',
    'form.configuration.settings.design.color.background.placeholder': 'Select a color',
    'form.configuration.settings.design.color.app.names': 'Application Names Color',
    'form.configuration.settings.design.color.app.names.placeholder': 'Select a color',
    'form.configuration.settings.design.background.image.url': 'URL of the background image',
    'form.configuration.settings.design.background.image.url.placeholder': 'Enter the url of the background image',
    'form.configuration.settings.design.icon': 'Icon size',
    'form.configuration.settings.design.icon.small': 'Small',
    'form.configuration.settings.design.icon.medium': 'Average (+ 20%)',
    'form.configuration.settings.design.icon.large': 'Large (+ 40%)',
    'form.configuration.settings.design.desktop.header': 'Desktop title',
    'form.configuration.settings.design.desktop.header.no': 'No',
    'form.configuration.settings.design.desktop.header.deviceid': 'Device ID',
    'form.configuration.settings.common.name': 'Name',
    'form.configuration.settings.common.name.placeholder': 'Enter the configuration name',
    'form.configuration.settings.common.desc': 'Description',
    'form.configuration.settings.common.desc.placeholder': 'Enter the configuration description',
    'form.configuration.settings.common.admin.pwd': 'Administrator Password',
    'form.configuration.settings.common.admin.pwd.placeholder': 'Enter the administrator password',
    'form.configuration.settings.common.gps': 'GPS',
    'form.configuration.settings.common.gps.any': 'Any',
    'form.configuration.settings.common.gps.off': 'Disabled',
    'form.configuration.settings.common.gps.on': 'Enabled',
    'form.configuration.settings.common.bluetooth': 'Bluetooth',
    'form.configuration.settings.common.wifi': 'Wi-Fi',
    'form.configuration.settings.common.mobile.data': 'Mobile data',
    'form.configuration.settings.common.usb.storage': 'Block USB storage',
    'form.configuration.settings.common.brightness': 'Manage brightness',
    'form.configuration.settings.common.brightness.none': 'None',
    'form.configuration.settings.common.brightness.auto': 'Auto',
    'form.configuration.settings.common.brightness.manual': 'Value',
    'form.configuration.settings.common.brightness.value': 'Screen brightness',
    'form.configuration.settings.common.timeout': 'Manage screen timeout',
    'form.configuration.settings.common.timeout.value': 'Screen timeout (s)',
    'form.configuration.settings.common.volume.block': 'Lock volume',
    'form.configuration.settings.common.timezone.mode': 'Manage time zone',
    'form.configuration.settings.common.timezone.mode.default': 'Do not manage',
    'form.configuration.settings.common.timezone.mode.auto': 'Auto',
    'form.configuration.settings.common.timezone.mode.manual': 'Manual',
    'form.configuration.settings.common.timezone': 'Time zone',
    'form.configuration.settings.common.timezone.placeholder': 'e.g. America/Los_Angeles',
    'form.configuration.settings.common.timezone.link': 'List of time zones',
    'form.configuration.settings.request.updates': 'Update Location',
    'form.configuration.settings.request.updates.donottrack': 'Do Not Track',
    'form.configuration.settings.request.updates.gps': 'By GPS',
    'form.configuration.settings.request.updates.wifi': 'Over Wi-Fi',
    'form.configuration.settings.request.updates.prompt.gps': 'To track GPS coordinates you need to enable GPS',
    'form.configuration.settings.request.updates.prompt.wifi': 'To track Wi-Fi coordinates you need to enable Wi-Fi',
    'form.configuration.settings.push.options' : 'Push notifications',
    'form.configuration.settings.push.options.mqtt.worker' : 'MQTT protocol (save battery)',
    'form.configuration.settings.push.options.mqtt.alarm' : 'MQTT protocol (instant delivery)',
    'form.configuration.settings.push.options.polling' : 'HTTP polling',
    'form.configuration.settings.password.mode' : 'Password requirements',
    'form.configuration.settings.password.mode.any' : 'None',
    'form.configuration.settings.password.mode.present' : 'Password presents',
    'form.configuration.settings.password.mode.easy' : 'Easy (at least 6 symbols)',
    'form.configuration.settings.password.mode.moderate' : 'Moderate (8+ symbols, letters and digits)',
    'form.configuration.settings.password.mode.strong' : 'Strong (8+, upper & lowercase, digits, signs)',
    'form.configuration.settings.use.default.launcher': 'Use with default launcher',
    'form.configuration.settings.orientation': 'Lock orientation',
    'form.configuration.settings.orientation.none': 'Do not lock',
    'form.configuration.settings.orientation.portrait': 'Portrait',
    'form.configuration.settings.orientation.landscape': 'Landscape',
    'form.configuration.files.search.label': 'Search:',
    'form.configuration.files.action.upload': 'Upload',
    'form.configuration.files.action.remove': 'Remove',

    'form.configuration.file.name': 'File name',
    'form.configuration.file.description': 'File description',
    'form.configuration.file.path': 'Path on device',
    'form.configuration.file.url': 'URL',
    'form.configuration.file.file': 'File',
    'form.configuration.file.action': 'Action',
    'form.configuration.file.action.prompt.1': 'Upload',
    'form.configuration.file.action.prompt.2': 'Remove',
    'form.configuration.file.remove.prompt.1': 'This file will not be synchronized with devices any more',
    'form.configuration.file.remove.prompt.2': 'Remove file from the server',

    'form.password.title': 'Change Password',
    'form.password.label.user': 'User',
    'form.password.label.password.new': 'New password',
    'form.password.label.password.new.placeholder': 'Enter a new password',
    'form.password.label.password.confirm': 'Verify',
    'form.password.label.password.confirm.placeholder': 'Enter the new password again',

    'form.application.type': 'Type',
    'form.application.type.option.web': 'Web-page',
    'form.application.type.option.app': 'Application',
    'form.application.pkg': 'Package ID',
    'form.application.from.file': 'Determined from file',
    'form.application.name': 'Application Name',
    'form.application.version': 'Version',
    'form.application.system': 'System',
    'form.application.run.after.install': 'Run after installation',
    'form.application.run.at.boot': 'Run at boot',
    'form.application.url': 'URL',
    'form.application.file': 'File',
    'form.application.showLabel': 'Show Icon',
    'form.application.iconText': 'Icon Text',
    'form.application.iconText.placeholder': '(default)',
    'form.application.versions.title': 'Versions of application',
    'form.application.icon': 'Icon',
    'form.application.icon.default': '(default)',
    'form.application.icon.add': 'Add icon',

    'form.application.setting.app': 'Application',
    'form.application.setting.app.placeholder': 'Select an application',
    'form.application.setting.name': 'Attribute',
    'form.application.setting.value': 'Value',
    'form.application.setting.comment': 'Comment',
    'form.application.setting.type': 'Type',
    'form.application.setting.readonly': 'Does not change on the device',
    
    'form.application.configurations.app': 'Application',
    'form.application.configurations.configs': 'Configurations',

    'form.configuration.copy.new.name': 'New name',
    'form.configuration.copy.new.name.placeholder': 'Enter the new configuration name',

    'form.customer.name': 'Name',
    'form.customer.name.placeholder': 'Enter the name of the organization',
    'form.customer.apiKey': 'API key',
    'form.customer.apiKey.placeholder': 'Enter the API key',
    'form.customer.prefix': 'Prefix',
    'form.customer.prefix.placeholder': 'Enter the device number prefix',
    'form.customer.device.configuration': 'Device configuration',
    'form.customer.desc': 'Description',
    'form.customer.desc.placeholder': 'Enter a description of the organization',
    'form.customer.copy.configuration': 'Copy configurations',
    'form.customer.copy.design': 'Copy design',
    'form.customer.type': 'Customer type',
    'form.customer.expiry.time': 'Expiry date',
    'form.customer.device.limit': 'Device limit',

    'form.device.number': 'Number',
    'form.device.number.hint': 'Don\'t use special characters',
    'form.device.desc': 'Description',
    'form.device.groups': 'Groups',
    'form.device.config': 'Configuration',
    'form.device.imei': 'IMEI',
    'form.device.phone.number': 'Phone Number',

    'form.update.device.config': 'Configuration',

    'form.file.file': 'File',
    'form.file.path': 'Path',
    'form.file.path.placeholder': 'Enter a relative path, for example "/ files /"',

    'form.file.apps.name': 'Application Name',
    'form.file.apps.pkg': 'Package ID',
    'form.file.apps.version': 'Version',

    'form.group.name': 'Name',
    'form.group.name.placeholder': 'Enter the name of the group',

    'form.user.login': 'Login',
    'form.user.login.placeholder': 'Enter user login',
    'form.user.name': 'Name',
    'form.user.name.placeholder': 'Enter your username',
    'form.user.role': 'Role',
    'form.user.all.devices.available': 'All devices are available',
    'form.user.available.groups': 'Available device groups',
    'form.user.password.new': 'New Password',
    'form.user.password': 'Password',
    'form.user.password.new.placeholder': 'Enter a new password',
    'form.user.password.confirm': 'Verify',
    'form.user.password.confirm.placeholder': 'Enter the new password again',

    'form.settings.hints.title': 'Hints',

    'form.settings.plugins.title': 'Used Plugins',

    'form.settings.common.title': 'Device Table View',
    'form.settings.common.visible.columns': 'Visible columns in the "Devices" table',
    'form.settings.common.status': 'Status',
    'form.settings.common.role': 'Users role',
    'form.settings.common.date': 'Date',
    'form.settings.common.device.number': 'Device number',
    'form.settings.common.imei': 'IMEI',
    'form.settings.common.phone.number': 'Phone Number',
    'form.settings.common.phone.model': 'Phone Model',
    'form.settings.common.status.permissions': 'Permission Status',
    'form.settings.common.status.installation': 'Installation Status',
    'form.settings.common.status.files': 'Files Status',
    'form.settings.common.config': 'Configuration',
    'form.settings.common.desc': 'Description',
    'form.settings.common.group': 'Group',
    'form.settings.common.launcher.version': 'Launcher version',
    'form.settings.common.battery.level': 'Battery level',
    'form.settings.common.default.launcher': 'Default launcher',

    'form.settings.design.title': 'Default Design',
    'form.settings.design.color.font': 'Background Color',
    'form.settings.design.color.font.placeholder': 'Select a color',
    'form.settings.design.color.app.names': 'Application Names Color',
    'form.settings.design.color.app.names.placeholder': 'Select a color',
    'form.settings.design.url.background.image': 'URL of the background image',
    'form.settings.design.url.background.image.placeholder': 'Enter the background image URL',
    'form.settings.design.size.icon': 'Icon size',
    'form.settings.design.size.icon.small': 'Small',
    'form.settings.design.size.icon.medium': 'Average (+ 20%)',
    'form.settings.design.size.icon.large': 'Large (+ 40%)',
    'form.settings.design.desktop.header': 'Desktop title',
    'form.settings.design.desktop.header.no': 'No',
    'form.settings.design.desktop.header.device.id': 'Device ID',

    'form.settings.lang.title': 'Language settings',
    'form.settings.lang.use.default': 'Use default language',
    'form.settings.lang.use': 'Use language',
    'form.settings.lang.en': 'English',
    'form.settings.lang.ru': 'Русский',
    'form.settings.lang.fr': 'Français',
    'form.settings.lang.ar': 'عربي',
    'form.settings.lang.es': 'Español',

    'form.settings.misc.title': 'Miscellaneous settings',
    'form.settings.misc.phone.format': 'Phone number format',
    'form.settings.misc.phone.format.placeholder': '+9 (999) 999-99-99',
    'form.settings.misc.custom.property.name.1': 'Custom property #1',
    'form.settings.misc.custom.property.name.2': 'Custom property #2',
    'form.settings.misc.custom.property.name.3': 'Custom property #3',
    'form.settings.misc.custom.property.name.placeholder': 'Enter name for a custom property',
    'form.settings.misc.create.new.devices': 'Add device on first access',
    'form.settings.misc.new.device.config': 'New device configuration',
    'form.settings.misc.new.device.group': 'New device group',

    'form.settings.groups.title': 'Groups',
    'form.settings.groups.search.placeholder': 'Group search',

    'form.settings.users.title': 'Users',
    'form.settings.users.search.placeholder': 'Search user',

    'form.qr.device.number.placeholder': 'Enter the device ID ...',
    'form.qr.code.image.alt': 'QR code',

    'form.profile.title': 'Change password',
    'form.profile.password.old': 'Old Password',
    'form.profile.password.old.placeholder': 'Enter old password',
    'form.profile.password.new': 'New Password',
    'form.profile.password.new.placeholder': 'Enter a new password',
    'form.profile.password.confirm': 'Verify',
    'form.profile.password.confirm.placeholder': 'Enter the new password again',

    'tab.customers': 'Organizations',
    'tab.common.applications': 'Shared Applications',

    'tab.devices': 'Devices',
    'tab.applications': 'Applications',
    'tab.configurations': 'Configurations',
    'tab.files': 'Files',
    'tab.default.design': 'Default Design',
    'tab.common.settings': 'Device Table View',
    'tab.users': 'Users',
    'tab.groups': 'Groups',
    'tab.language': 'Language and other settings',
    'tab.license': 'License',
    'tab.hints': 'Hints',
    'tab.plugins': 'Plugins',
    
    'tab.configeditor.common.settings': 'Common settings',
    'tab.configeditor.design.settings': 'Design Settings',
    'tab.configeditor.applications': 'Applications',
    'tab.configeditor.mdm.settings': 'MDM Settings',
    'tab.configeditor.app.settings': 'Applications Settings',
    'tab.configeditor.files': 'Files',

    'search.placeholder.file': 'search file',
    'search.placeholder.configuration': 'Search for configuration',
    'search.placeholder.customer': 'Search for an organization',
    'search.placeholder.application': 'Search for an application',
    'search.placeholder.application.setting': 'Search for an application setting',
    'search.placeholder.device': 'Search for a device',
    'search.placeholder.address': 'Address search',
    'search.placeholder.point': 'Site search',
    'search.placeholder.message': 'Message search',
    'search.placeholder': 'Search ...',
    'search.placeholder.from': 'From ...',
    'search.placeholder.to': 'To ...',
    'search.placeholder.user': 'Type the user name',

    'table.heading.customer.name': 'Name',
    'table.heading.customer.desc': 'Description',
    'table.heading.customer.registration.time': 'Registered',
    'table.heading.customer.last.login.time': 'Last login',
    'table.heading.customer.actions': 'Actions',
    'table.heading.customer.type': 'Type',
    'table.heading.customer.expiry.time': 'Expires',
    'table.heading.customer.device.limit': 'Limit',

    'table.heading.configuration.name': 'Name',
    'table.heading.configuration.desc': 'Description',
    'table.heading.configuration.actions': 'Actions',

    'table.heading.application.setting.app.pkg': 'Package ID',
    'table.heading.application.setting.app.name': 'Application Name',
    'table.heading.application.setting.name': 'Attribute',
    'table.heading.application.setting.value': 'Value',
    'table.heading.application.setting.comment': 'Comment',
    'table.heading.application.setting.lastUpdate': 'Creation Date',

    'table.heading.file.url': 'URL',
    'table.heading.file.devicepath': 'Path on device',
    'table.heading.file.description': 'File description',
    'table.heading.file.action': 'Action',
    'table.heading.file.lastUpdate': 'Creation date',
    
    'table.heading.application.pkg': 'Package ID',
    'table.heading.application.name': 'Application Name',
    'table.heading.application.version': 'Version',
    'table.heading.application.url': 'URL',
    'table.heading.application.label': 'Icon',
    'table.heading.application.actions': 'Actions',
    'table.heading.application.order': 'Order',

    'table.heading.device.status': 'Status',
    'table.heading.device.date': 'Date',
    'table.heading.device.device.number': 'Device Number',
    'table.heading.device.imei': 'IMEI',
    'table.heading.device.phone.number': 'Phone Number',
    'table.heading.device.phone.model': 'Phone Model',
    'table.heading.device.status.permissions': 'Permission Status',
    'table.heading.device.status.installation': 'Installation Status',
    'table.heading.device.status.files': 'Files status',
    'table.heading.device.configuration': 'Configuration',
    'table.heading.device.desc': 'Description',
    'table.heading.device.group': 'Group',
    'table.heading.device.launcher.version': 'Launcher version',
    'table.heading.device.battery.level': 'Battery level',
    'table.heading.device.default.launcher': 'Set as default',
    'table.heading.device.actions': 'Actions',

    'table.heading.group.name': 'Name',
    'table.heading.group.actions': 'Actions',

    'table.heading.file.name': 'Filename',
    'table.heading.file.path': 'Path',
    'table.heading.file.address': 'Address',
    'table.heading.file.actions': 'Actions',

    'table.heading.users.login': 'Login',
    'table.heading.users.name': 'Name',
    'table.heading.users.role': 'Role',
    'table.heading.users.actions': 'Actions',

    'table.heading.common.apps.customer': 'Organization',
    'table.heading.common.apps.pkg': 'Package ID',
    'table.heading.common.apps.name': 'Application Name',
    'table.heading.common.apps.version': 'Version',
    'table.heading.common.apps.url': 'URL',
    'table.heading.common.apps.label': 'Icon',
    'table.heading.common.apps.actions': 'Actions',

    'notfound.devices': 'There are no devices to display.',
    'notfound.files':' The file list is empty.',
    'notfound.configurations': 'No configurations were found.',
    'notfound.customers': 'Organizations not found.',
    'notfound.common.apps': 'There are no applications to display.',
    'notfound.applications': 'Applications not found',
    'notfound.groups':' No groups found. Try a different query.',
    'notfound.users':' Users not found. Try a different query.',
    'notfound.apps.for.display': 'There are no applications to display.',
    'notfound.app.versions.for.display': 'There are no versions to display.',

    'format.date.header': 'HH:mm dd/MM/yyyy',

    'menu.about': 'About',
    'menu.profile': 'Profile',
    'menu.panel.master': 'Master Panel',
    'menu.panel.main': 'Main panel',
    'menu.logout': 'Log out',
    'menu.functions': 'Functions',
    'menu.settings': 'Settings',
    'menu.show.hints': 'Show hints',

    'plugin.name.not.specified': '<< The function name is not specified >>',

    'breadcrumb.devices': 'Devices',
    'breadcrumb.applications': 'Applications',
    'breadcrumb.configurations': 'Configurations',
    'breadcrumb.files': 'Files',
    'breadcrumb.default.design': 'Design by default',
    'breadcrumb.common.settings': 'Device Table View',
    'breadcrumb.language.settings': 'Language and Other Settings',
    'breadcrumb.license.settings': 'License',
    'breadcrumb.users': 'Users',
    'breadcrumb.groups': 'Groups',
    'breadcrumb.hints': 'Hints',
    'breadcrumb.plugins': 'Plugins',
    'breadcrumb.config.details': 'Details',
    'breadcrumb.application.versions': 'Versions',

    'app.name': 'Headwind MDM',
    'app.description': 'is the open source mobile device management system',
    'app.title': 'Headwind MDM Web Panel',

    'box.show.my.apps.only': 'Display my applications only',
    'configuration.app.version.upgrade.message': 'Installed version ${installedVersion}, available version ${latestVersion}',

    'about.line.1': 'Headwind MDM control panel',
    'about.line.2': 'Enterprise launcher for Android',
    'about.line.3': 'Version ${versionNumber}',
    'about.line.4': 'Installed plugins',

    'common.app.clarification': 'This application is public and not available for editing. To add another version of this app, please contact the administrator.',

    'qrcode.help.line1': 'To setup the Android device (version 7 or higher) in a managed (corporate) mode:',
    'qrcode.help.line2': 'Reset the device to factory settings',
    'qrcode.help.line3': 'Tap 7 times on any place of the start screen (you must enter a hidden QR code scanning mode)',
    'qrcode.help.line4': 'Follow the device instructions: accept the terms, connect to Wi-Fi, scan this QR-code',
    'qrcode.help.line5': 'The QR code may contain the device ID for Headwind MDM (so you don\'t need to enter it on a mobile device). To embed the device ID into the QR code, enter the device ID on this screen and click "Renew".',

    'form.configuration.app.version.select.select.title': 'Select the version to install',
    'form.configuration.app.version.select.version.check.off': 'Disable version checking',
    'form.configuration.app.version.select.upgrade.warning': 'Upgrade application "${v1}" to version "${v3}" for configuration "${v2}"?',
    'form.configuration.app.version.select.downgrade.warning': 'Downgrade version DELETE ALL THESE APPLICATIONS on all devices! Downgrade the application version "${v1}" to version "${v2}"? ',

    'hint.step.1': 'Click here to start the device enrollment',
    'hint.step.2': 'Click here to open the QR code',
    'hint.step.3': 'Click here to see how to open the QR code scanner on the device',
    'hint.step.4': 'Find an available device ID in the «Devices» tab. Click «Renew» to include it in the QR code.',

    'ie.browser.notice.1': 'Unfortunately, Internet Explorer is not supported.',
    'ie.browser.notice.2': 'Recommended Browser for Using Headwind MDM - <a href="https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop">Chrome</a>.',

    'form.resolved.duplicate.pkg.text1': 'Package ID "${pkg}" is already used by the applications listed below.',
    'form.resolved.duplicate.pkg.text2': 'Do you want to add a new application or a new version of an existing application?',
    'form.resolved.duplicate.pkg.text3': 'New version for',
    
    'tooltip.usage.byconfigurations': 'Used by configurations',
    'tooltip.usage.byapps': 'Used by applications',
    'tooltip.usage.byicons': 'Used by icons',

    'form.devices.label.params.more': 'More parameters',
    'form.devices.label.params.less': 'Less parameters',
    'form.devices.label.installation.status': 'Installation status',
    "format.devices.date.createTime": "dd/MM/yyyy HH:mm:ss",
    "format.devices.date.datePicker": "dd-MM-yyyy",

    'form.devices.selection.install.status.default': 'Installation status ...',
    'form.devices.selection.install.status.all': 'All',
    'form.devices.selection.install.status.success': 'Success',
    'form.devices.selection.install.status.version.mismatch': 'Version Mismatch',
    'form.devices.selection.install.status.failure': 'Failure',
    'form.devices.selection.imei.changed': 'IMEI recently changed',

    'search.placeholder.launcher.version': 'Launcher Version',
    'error.date.range.invalid': 'Invalid date interval',

    'customer.type.demo': 'Demo',
    'customer.type.small': 'Professional',
    'customer.type.corporate': 'Enterprise',
    'customer.type.master': 'Primary',

    'account.expiring': 'Your account will be expired in ${days} days. Please contact the seller to renew your account.',
    'account.expired.short': 'Your account has been expired!',
    'account.expired': 'Your account has been expired. Please contact the seller to renew your account.',
    'device.limit.achieved': 'Cannot add a device because you have reached your limit. Please remove some devices or contact the seller to extend your device limit.',

    'yes': 'yes',
    'no': 'no'
};