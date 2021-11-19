# CentOS相关

## IP配置

``` shell
ip addr //查看网卡 lo为闭环口，虚拟ip ，其他的是显卡
vi /etc/sysconfig/network-scripts/其他显卡
/***********添加配置************/
IPADDR=192.168.1.xxx
NETMAST=xxx.xxx.xxx.xxx //子掩码
GATEWAY=xxx.xxx.xx.xxx  //网关
DNS1 = xxx.xxx.xxxx.xxxx  // dns
BOOTPROTO = staric | dhcp //静态 或动态
ONBOOT = yes //是否开机启动网卡配置
/************wq*********/
systemctl restart network
```

## 升级版本

1. 检查版本``` cat /etc/redhat-release ```
2. 清空yum缓存 ``` sudo yum clean all ```
3. 升级 ``` sudo yum update ```
4. 重启 ``` reboot ```

## ssh

- 客户端创建公钥复制给服务器，会在服务段.ssh/authorized_keys插入，登录服务器删除就时效了

``` shell
    ssh-keygen
    ssh-copy-id
```

## 给服务器传文件的方式

- ssh+scp:免密登录加端口转发
- ftp、sftp
- rzsz

## node 安装

- 添加源 `curl -sL https://rpm.nodesource.com/setup_11.x | bash -`
- yum安装

    ```shell
    yum install -y nodejs
    npm install -g n
    n stable // 升级稳定版
    reboot
    npm install -g npm
    ```

## 安装nginx

yum 