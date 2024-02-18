## EAS DEMO

### Eas build

### USAGE

```
$ eas build [-p android|ios|all] [-e <value>]
[--local] [--output <value>] [--wait] [--clear-cache]
[--auto-submit | --auto-submit-with-profile <value>] [-m <value>]
[--json --non-interactive]
```

### COMMANDS

build:cancel cancel a build
build:configure configure the project to support EAS Build
build:inspect inspect the state of the project at specific build
stages, useful for troubleshooting
build:list list all builds for your project
build:resign re-sign a build archive
build:run run simulator/emulator builds from eas-cli
build:view view a build for your project

### DESCRIPTION

start a build

### TOPICS

build:version get the latest version from EAS servers

### Example

```
eas build -p ios --profile development --local
```

### Github actions

### Internal distribution

We need to create ad hoc provising profile that explicitly lists the devices on which the application can run.
Apps signed with an ad hoc provisioning profile can be installed by any iOS device whose unique identifier (UDID) is registered with the provisioning profile.
Setting up ad hoc provisioning consists of two steps. In the first step, you'll register devices that you want to be able to install your app. Run the following command to generate a URL (and QR code, for convenience) that you can open on your devices, and then follow the instructions on the registration page.

https://docs.expo.dev/build/internal-distribution/#do-you-have-an-apple-developer-enterprise

"distribution": "internal" -- using ad hod distribution

### Trigger a build from Github

https://docs.expo.dev/build/building-from-github/

Once you have configured your app for GitHub, you can trigger a build from GitHub by using the UI on your project's build list page or by labels on your GitHub PRs.
