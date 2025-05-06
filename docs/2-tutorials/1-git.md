---
sidebar_label: 'Git - Your NonStop to Cloud Repository'
sidebar_position: 1

tags:
- where to start
---

# Connecting git to Your NonStop

# What is git?
Git is the industry standard for version control in the DevOps (Developer x Operations) space. So much that it has become a household name for every developer in the world. 

Git and its workflow management maintains good coding practices, and regulates the development of applications.

Here's how to get started on getting git onto your NonStop.

# Connecting your repos on the public cloud to your NonStop

Now that you have git set up on your NonStop, our next steps would be to figure out how to connect the repositories on the cloud and other systems to our NonStop.

We will need to do 4 things:
1. Generate the public key on the NonStop to establish a SSH Connection
2. Retrieve the Key generated on the NonStop
3. Drop the Public Key onto the cloud repository
4. Add the Host into the NonStop

Let's get started!

## 1. Generating the Public Key on NonStop
1. Log onto your NonStop system and type this command in Guardian.

```  
     $VOLUME USER 1> sshcom $ZSTCF
```

2. Switch to client mode.
```    
     % mode client
     mode client
     OK, switched to client mode
```

3. Generate key with a key name i.e mykey, and add a comment for the key generated with your email id.
```    
     % GENERATE KEY mykey,TYPE ECDSA, BITS 521, COMMENT "myemail@email.com"
     OK, key user:mykey successfully generated
```

4. Export mykey into the OpenSSH format, store into a volume and exit.
```   
     % EXPORT KEY mykey, FORMAT OPENSSH, FILE $volume.USER.pubkey
     OK, key user:mykey exported
     % exit
```
## 2. Retrieving the Key from Guardian
1. Using Guardian, go to the volume where the key is stored in and copy the key into the command line.
```     
     $VOLUME USER 2> volume $volume.USER
     $VOLUME USER 3> fup copy pubkey,,recin 521, recout 521, fold
```

## 3. Dropping the key onto the cloud repository

Here are the tutorial links for **[Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/set-up-an-ssh-key/)** and for **[GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account )**.

## 4. Adding the Host onto the NonStop
Log into OSS and add the repository url into volume, **$ZSTCF**, and add host onto store (yes/no).

### Bitbucket
```
    /home/usr: /G/system/zssh/sshoss -T -S \$ZSTCF git@bitbucket.org
```

### GitHub
```
    /home/usr: /G/system/zssh/sshoss -T -S \$ZSTCF git@github.com
```

# Errors with your keys?
## Deleting NonStop Generated Key on NonStop
```
     $VOLUME USER 1> sshcom $ZSTCF
     % mode client
     mode client
     OK, switched to client mode

     % info knownhost *: *
     % delete knownhost [knownby]:[knownhost]
```



Congratulations! You now have a git repository on your NonStop, ready for development and your git workflows!

Happy development!
