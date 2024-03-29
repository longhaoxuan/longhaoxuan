# Git总揽

## 安装配置

[安装配置](git安装配置.md)

## 代码仓库

### 创建代码

   1. 进入需要创建代码仓库的文件夹 'cd 文件路径'
   2. 创建/初始化仓库 `git init`
   3. 拉去远程仓库到本地 `git clone [gitlink]`

### 添加文件到仓库

1. 添加文件到暂存区
   1. 添加单个文件 `git add [filepath]`
   2. 忽略的文件
      - .gittignore中指定的文件会被忽略
      - 空目录

2. 提交到本地仓库
   - `git commit`
   - 填写commit message保存,规范TODO

3. 查看工作状态`git status`

4. 对比工作区文件变化`git diff`

### 仓库配置

1. 配置全局用户名和邮箱
   - `git config --global user.name "[name]"`
   - `git config --global user.email "[email address]"`

2. 配置当前仓库用户名和邮箱
    - `git config user.name "[name]"`
    - `git config user.email "[email address]"`

## 代码版本/提交切换

### 查看过去版本/提交

1. 提交详情`git log`
2. 提交简介`git log --pretty=oneline`

### 退回版本/提交

1. 回到当前最新提交 `git reset -- hard HEAD`
2. 回到上次提交 `git reset -- hard HEAD^`
3. 退回到上n次提交 `git reset -- hard HEAD-n`
4. 退回到某次提交 `git reset --hard [commitid]`

### 重返未来版本

1. 查看历史提交以及被退回的提交`git reflog`

    注意：该记录有时限，且只在本地

2. 回到未来版本 `git reset --hard commitid`

### 撤销修改

1. 工作去文件撤销,没有提交到暂存区/没有git add
   - 撤销修改`git checkout [filepath]`
2. 暂存区文件撤销
   1. 将暂存区文件撤销到工作区 `git reset HEAD [falepath]` 不带--hard
   2. 撤销修改`git checkout [filepath]`
3. 提交到了版本库
   - 参见回退版本/提交

### 文件删除

1. 删除文件 从版本库中删除
   1. `git rm [filepath]`
   2. 修改后需要提交
2. 恢复删除
   - 参考撤销修改
3. 从版本库中删除文件，但是本地不删除该文件 `git rm --cached`

### 暂存修改

- 参照分支-暂存修改
  
### 忽略文件

- 通过git仓库下的.gitignore文件屏蔽某些中间文件/生成文件

### 注意：这里的版本均为本地仓库版本

## 分支

### 创建与合并分支

1. 创建分支
   - 仅创建`git  branch 分支名`
   - 创建并切换 `git checkout -b 分支名`
   - 注意：在本地仓库才做，创建的都是本地分支
2. 切换分支 `git checkout 分支名`
3. 合并分支
   - `git merge 合并某分支到当前分支`
   - `git rebase` 若无特殊需要不建议使用
4. 删除分支
   1. 删除本地分支
      - 删除未合并分支 `git branch -D 分支名`
      - 删除已合并分支 `git branch -d 分支名`
   2. 删除远程分支
      - 删除远程分支
        1. `git push origin -d 分支名`
        2. `git push <远程仓库名>/分支名`
        3. 建议界面操作
5. 查看分支
   1. 查看当前分支 `git branch`
   2. 查看所有分支信息 `git branch -a`
6. 合并分支，解决分支冲突
   - 将要合并的分支更新到最新
   - 切换到主分支
   - 合并分支
   - 解决合并时的conflict
   - 提交到版本库
   - 合并成功
   - 查看分支状态
     - `git log --graph`
     - `git log --graph --pretty=oneline --abbrey-commit`
7. 开发完需要提交PR/MR
   - 通过PR/MR来合并开发分支与主分支

### 分支暂存修改

- 暂存工作现场 `git stash apply`
- 恢复工作现场
  - 恢复 `git stash apply`
  - 删除 `git stash drop`
  - 恢复 + 删除 `git stash pop`

### 多人协作

1. 查看远程库信息
   - 详细 `git remote -v`
   - 不详细 `git remote`
2. 更新/推送远程库
   1. 更新远程库信息 `git fetch`
   2. 将远程库最新修改更新到本地
      - `git pull`
      - git pull 可以认为是 git fetch+git merge
   3. 将本地修改推送到远程库
      - `git push`
      - git push origin 分支名
3. 本地分支与远程分支交互
   1. 使用远程分支A创建本地分支
      - `git checkout -b A origin/A`
      - origin是远程仓库名，若名字一样origin/A可以省略
   2. 将本地分支与远程分支作关联
      - `git branch --set-upstream A origin/A`
      - 提示no tracking information错误

### 建议开发遵循或者参照git标准工作流，比如git flow、github flow或者gitlab flow

## 代码版本tag

### 查看tag

- 本地tag `git tag`
- 远程 `git tag -r`

### 操作tag

- 添加tag
  - 给当前版本添加tag
    - git tag 标签名
  - 给历史版本添加tag
    - git tag 标签名 commitid
- 删除tag
  - 删除本地标签 `git tag -d 标签名`
  - 删除远程标签 `git push origin -d 标签名`
- 推送到远端仓库
  - `git push origin 标签名`
  - 推送所有未提交的tag
    - `git push origin --tags`
- 更新到本地 `git pull origin --tags`
  
### tag与branch的操作基本一致，tag是一个仅可读的branch

## 其他生僻命令

- git blame
- git bisect 过第二分支查找定位引入bug的变更
- git relog
- 可以使用git help或者查看git常用的命令，使用git help -a查看git可用的所有命令

<a href="/blog/git图谱.html">网络加载图 </a>

[网络加载图](/blog/git图谱.html)

## 工作流

1. git clone // 到本地
2. git checkout -b xxx 切换至新分支xxx
   （相当于复制了remote的仓库到本地的xxx分支上
3. 修改或者添加本地代码（部署在硬盘的源文件上）
4. git diff 查看自己对代码做出的改变
5. git add 上传更新后的代码至暂存区
6. git commit 可以将暂存区里更新后的代码更新到本地git
7. git push origin xxx 将本地的xxxgit分支上传至github上的git

-----------------------------------------------------------

（如果在写自己的代码过程中发现远端GitHub上代码出现改变）

1. git checkout main 切换回main分支
2. git pull origin master(main) 将远端修改过的代码再更新到本地
3. git checkout xxx 回到xxx分支
4. git rebase main 我在xxx分支上，先把main移过来，然后根据我的commit来修改成新的内容
（中途可能会出现，rebase conflict -----》手动选择保留哪段代码）
5. git push -f origin xxx 把rebase后并且更新过的代码再push到远端github上（-f ---》强行）
6. 原项目主人采用pull request 中的 squash and merge 合并所有不同的commit

-----------------------------------------------------------

远端完成更新后

1. git branch -d xxx 删除本地的git分支
2. git pull origin master 再把远端的最新代码拉至本地
