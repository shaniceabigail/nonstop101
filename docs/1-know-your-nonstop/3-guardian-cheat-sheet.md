---
sidebar_label: 'Cheat Sheet - Guardian'
sidebar_position: 3

tags:
- guardian
---

# Guardian Commands Cheat Sheet

```status``` - checks on the process 

```status *``` - lists all processess

```fileinfo ```

```tedit [filename], r``` - open file, read-only

```fc```

```purge [FILENAME]```

## Edit
```l``` - list

## Exit - "press F16"

## Finding Help
- Safecom 
    1. Log into safecom
    2. ```=help```

## Search For Files
```fileinfo``` - see all files in the subvolume

### Check if memory pressure at a snapshot
```peek /cpu [number]/```  - i.e peek /cpu 2/

### View All:

- #### Disks
    1. ```status *, prog [$DISK.SUBVOL.OBJECTNAME]``` - status, including system disks

    2. ```dsap *, short``` - **short** list of all disks (*) using the disk space analysis program (dsap)

- #### Processes in CPU 0
    1. ```status 0```


Fileinfo $ \* .*.pathmon
 
status *, prog $system.system.pathmon
 

```fup```

```fup dup```

```whoami```

```set prompt both```

``` volume $disk.subvolume```





## to get into oss
```osh ```

## Pathcom

## Tmfcom

## SCF