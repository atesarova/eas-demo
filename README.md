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
