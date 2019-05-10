* branch 지우기

  ```bash
  $ git branch -d yeji
  ```

* 브랜치 만들면서 이동

  * git branch 브랜치 명 + git checkout 브랜치명

  ```bash
  $ git checkout -b 브랜치명
  ```



## 3가지 상황

1. **fast-fowarding**

2. **merge  commit 이 필요한 경우**

   * master branch가 시작과 달라졌기 때문에



3. **충돌** => 

   * merge-commit (auto-merging)을 했으나 충돌이 생김
   * `Automatic merge failed; fix conflicts and then commit the result.` : 충돌 메세지

   ```bash
   $ git merge jeong
   Auto-merging profile.txt
   CONFLICT (content): Merge conflict in profile.txt
   Automatic merge failed; fix conflicts and then commit the result.
   ```

   ```bash
   $ git status
   On branch master
   Your branch is ahead of 'origin/master' by 5 commits.
     (use "git push" to publish your local commits)
   
   You have unmerged paths.
     (fix conflicts and run "git commit")
     (use "git merge --abort" to abort the merge)
   
   Unmerged paths:
     (use "git add <file>..." to mark resolution)
   
           both modified:   profile.txt
   ```

   * 수정 -> add/commit 

