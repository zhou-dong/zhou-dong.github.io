---
layout: page
title: Add System Call In Linux (Elementary)
category: Linux

---
{% include JB/setup %}

Machine: Apple Mac

#### Full Screen of Elementary  OS in Vitual Box

- run code:

<pre><code class="bash">
cd /media/
sudo mkdir /cdrom/
sudo mount /dev/sr0 /media/cdrom
cd /media/cdrom
sudo ./VBoxLinuxAdditions.run
sudo reboot
</code></pre>

#### Add System Call

- download linux kernel in [kernel.org](https://www.kernel.org/)  (my version is: 3.2.76)

<pre><code class="bash">
cd /Downloads
sudo mv linux-3.2.76.tar.xz /usr/src/.
cd /usr/src/
sudo xz -d linux-3.2.76.tar.xz
sudo tar -xvf linux-3.2.76.tar
</code></pre>

- Add system call function

<pre><code class="bash">
sudo vim /usr/src/linux-3.2.76/kernel/sys.c
</code></pre>

<pre><code class="c">
asmlinkage int sys_add2(int i, int j)
{
    return i + j;
}
</code></pre>

- Regist on system

<pre><code class="bash">
sudo vim usr/src/linux-3.2.76/arch/x86/kernel/syscall_table_32.S
    .long sys_add2
</code></pre>

- Add system call parameter

<pre><code class="c">
sudo vim /usr/src/linux-3.2.76/arch/x86/include/asm/unistd_64.h

#define __NR_add2           xxx (update numer +=1)
__SYSCALL(__NR_add2, sys_add2)
</code></pre>

<pre><code class="c">
sudo vim /usr/src/linux-3.2.76/arch/x86/include/asm/unistd_32.h

#define __NR_add2           xxx (update numer +=1)
</code></pre>

#### complie

<pre><code class="bash">
cd  /usr/src/linux-3.2.76
sudo apt-get install libncurses5-dev
sudo make localmodconfig
sudo make -j N
sudo make modules_install
sudo make install
sudo reboot
</code></pre>

#### Test

<pre><code class="c">
#include<stdio.h>
#include<errno.h>

#define __NR_add2  312   //(xxx updated number)

int main()
{
    int a,b;
    printf(“Input Two Number To Kernel Space\n”);
    printf(“Input a  ”);
    scanf(“%d”,&a);
    printf(“Input b  ”);
    scanf(“%d”,&b);
    printf("%d\n", syscall(__NR_add2, a,b)) ;
    return 0;
}
</code></pre>
