# mysql安装配置

## centos7 下安装

1. 检测系统内部有没有安装其他的mysql数据库
   ``` rpm -qa | grep mysql ```
   然后如果有的话删除这些mysql yum remove 查出来的所有名字

2. 彻底删除系统中mysql的目录
   ``` find / -name mysql ```
   将查出的所有目录删掉 rm -rf 查到的路径

3. 下载mysql的rpm包
   ``` wget http://dev.mysql.com/get/mysql57-community-release-el7-8.noarch.rpm ```

4. 安装mysql源
    ``` yum localinstall mysql57-community-release-el7-8.noarch.rpm ```

5. 重要一步
   先尝试安装
   ``` yum install -y mysql-community-server ```

6. 启动mysql服务
    ```systemctl start mysqld```

7. mysql开启启动
   ``` systemctl enable mysqld ```

8. 查看初始密码
   ``` grep 'temporary password' /var/log/mysqld.log ```

9. 密码策略
    - 修改密码策略 ``` set global validate_password_policy=LOW; ```  
    - 修改密码:``` SET PASSWORD = PASSWORD('Xiaoming250'); ```
    - 配置远程登陆账号: ``` CREATE USER 'username'@'host(loclhost|ip|%)' IDENTIFIED BY 'password'; ```

10. 防火墙相关
    - 添加3306 ``` firewall-cmd --zone=public --add-port=8080/tcp --permanent (--permanent永久生效，没有此参数重启后失效) ``` [查看博客](https://www.cnblogs.com/faithH/p/11811286.html)
    - 热加载才能生效：``` firewall-cmd --reload ```

## 端口检测

每次都忘记 每个都记录下吧 ``` netstat -tuln ```