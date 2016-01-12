---
layout: page
title: Prepare Computer Vision
categories: machine-learning

---

{% include JB/setup %}

- resolution: 分辨率

- sampleing: choose or delete pixels
- quantization: quantize the pixels

- noise: different from its neighbors

### Image and video compress

For those interested, the slides presented in the videos for this module can be downloaded here: 

[deeplearning-annotated.pdf](https://d396qusza40orc.cloudfront.net/phoenixassets/ml-foundations/deeplearning-annotated.pdf)

Some useful papers on computer vision:

- SIFT [Lowe '99](http://www.cs.ubc.ca/~lowe/papers/iccv99.pdf)
- Spin Images [Johnson & Herbert '99](https://www.ri.cmu.edu/pub_files/pub2/johnson_andrew_1997_3/johnson_andrew_1997_3.pdf)
- Textons [Malik et al. '99](http://www.cs.berkeley.edu/~malik/papers/LM-3dtexton.pdf)
- RIFT [Lazebnik '04](https://hal.inria.fr/inria-00548530/document)
- GLOH [Mikolajczyk & Schmid '05](http://lear.inrialpes.fr/pubs/2005/MS05/mikolajczyk_pami05.pdf)
- HoG [Dalal & Triggs '05](http://lear.inrialpes.fr/people/triggs/pubs/Dalal-cvpr05.pdf)
- SURF [Bay et al. '06](http://www.vision.ee.ethz.ch/~surf/eccv06.pdf)
- ImageNet [Krizhevsky '12](http://www.cs.toronto.edu/~fritz/absps/imagenet.pdf)

---

#### Neutral Network

<img src="http://www.intechopen.com/source/html/11772/media/image29.jpg" alt="neural network"/>

- 神经网络的每个部分其实就是Logistic Regression，很多个Logistic Regression组合在一个就是神经网络的一个layer
- 多个layer组合在一个构成一个神经网络

computer vision

- 找出图片中的pattern或者是特征
