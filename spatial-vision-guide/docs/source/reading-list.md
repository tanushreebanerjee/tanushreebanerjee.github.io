# 📚 Complete Reading List


---

This is the **complete, unified reading list** for understanding spatial vision, 3D/4D perception, neural rendering, and generative models. It's organized to follow a logical dependency graph.

**Legend:**
- ⭐ Essential reading (start here)
- 🔥 High impact / frequently cited
- 📖 Foundational paper
- 🚀 Cutting-edge (2024-2025)

---

# 0. 🍃 Foundations

## Core ML & Math

### Textbooks
- ⭐⭐ **Deep Learning Book** (Goodfellow, Bengio, Courville) - [deeplearningbook.org](https://www.deeplearningbook.org/)
- ⭐⭐ **Dive Into Deep Learning** (Zhang et al.) - [d2l.ai](https://d2l.ai/)
- ⭐⭐⭐ **Pattern Recognition and Machine Learning** (Bishop)
- ⭐⭐ **CS231n Notes** - [cs231n.stanford.edu](https://cs231n.github.io/)
- ⭐⭐ **CS231A Geometry Notes** - Camera models, epipolar geometry

## Classical CV

- ⭐⭐ **Computer Vision: Algorithms and Applications** (Szeliski) - [szeliski.org](http://szeliski.org/Book/)
- ⭐⭐⭐ **Multiple View Geometry** (Hartley & Zisserman) - The bible of geometric CV

## Transformers

- 🔥 **Attention Is All You Need** (Vaswani et al., 2017) - [arXiv](https://arxiv.org/abs/1706.03762)
- 🔥 **An Image is Worth 16x16 Words** (ViT, Dosovitskiy et al., 2020) - [arXiv](https://arxiv.org/abs/2010.11929)
- 🔥 **Training data-efficient image transformers** (DeiT, Touvron et al., 2021) - [arXiv](https://arxiv.org/abs/2012.12877)
- 🔥 **Swin Transformer** (Liu et al., 2021) - [arXiv](https://arxiv.org/abs/2103.14030)
- **FlashAttention** (Dao et al., 2022) - [arXiv](https://arxiv.org/abs/2205.14135)
- **Multi-Query Attention (MQA)** - Optimization techniques
- **RoPE / Relative Positional Embeddings**

---

# 1. 🌈 Representation Learning / Foundation Models

## Self-Supervised Learning

- 🔥 **A Simple Framework for Contrastive Learning** (SimCLR, Chen et al., 2020) - [arXiv](https://arxiv.org/abs/2002.05709)
- 🔥 **Momentum Contrast for Unsupervised Visual Representation Learning** (MoCo, He et al., 2020) - [arXiv](https://arxiv.org/abs/1911.05722)
- 🔥 **Bootstrap Your Own Latent** (BYOL, Grill et al., 2020) - [arXiv](https://arxiv.org/abs/2006.07733)
- 🔥 **Emerging Properties in Self-Supervised Vision Transformers** (DINO, Caron et al., 2021) - [arXiv](https://arxiv.org/abs/2104.14294)
- 🔥 **DINOv2: Learning Robust Visual Features without Supervision** (Oquab et al., 2024) - [arXiv](https://arxiv.org/abs/2304.07193)
- **Masked Autoencoders Are Scalable Vision Learners** (MAE, He et al., 2021) - [arXiv](https://arxiv.org/abs/2111.06377)

## Multimodal Foundation Models

- 🔥🔥 **Learning Transferable Visual Models From Natural Language Supervision** (CLIP, Radford et al., 2021) - [arXiv](https://arxiv.org/abs/2103.00020)
- 🔥 **BLIP: Bootstrapping Language-Image Pre-training** (Li et al., 2022) - [arXiv](https://arxiv.org/abs/2201.12086)
- 🔥 **BLIP-2: Bootstrapping Language-Image Pre-training with Frozen Image Encoders** (Li et al., 2023) - [arXiv](https://arxiv.org/abs/2301.12597)
- 🔥 **LLaVA: Large Language and Vision Assistant** (Liu et al., 2023) - [arXiv](https://arxiv.org/abs/2304.08485)
- **Qwen2-VL** - Recent multimodal model
- **InternVL** - Vision-language foundation model
- **VideoCLIP** - Video-text understanding
- **Gemini-Vision / GLM-4.5V** - Latest multimodal models

---

# 2. 🎨 Generative Models

## GAN Roots

- 📖 **Generative Adversarial Networks** (GAN, Goodfellow et al., 2014) - [arXiv](https://arxiv.org/abs/1406.2661)
- 🔥 **Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks** (DCGAN, Radford et al., 2015) - [arXiv](https://arxiv.org/abs/1511.06434)
- 🔥 **Analyzing and Improving the Image Quality of StyleGAN** (Karras et al., 2020) - [arXiv](https://arxiv.org/abs/1912.04958)
- 🔥 **Alias-Free Generative Adversarial Networks** (StyleGAN3, Karras et al., 2021) - [arXiv](https://arxiv.org/abs/2106.12423)
- **Large Scale GAN Training for High Fidelity Natural Image Synthesis** (BigGAN, Brock et al., 2018) - [arXiv](https://arxiv.org/abs/1809.11096)

## Diffusion Models

- 📖 **Denoising Diffusion Probabilistic Models** (DDPM, Ho et al., 2020) - [arXiv](https://arxiv.org/abs/2006.11239)
- 🔥 **Denoising Diffusion Implicit Models** (DDIM, Song et al., 2020) - [arXiv](https://arxiv.org/abs/2010.02502)
- 🔥 **Score-Based Generative Modeling through Stochastic Differential Equations** (Song et al., 2020) - [arXiv](https://arxiv.org/abs/2011.13456)
- 🔥 **High-Resolution Image Synthesis with Latent Diffusion Models** (Stable Diffusion, Rombach et al., 2022) - [arXiv](https://arxiv.org/abs/2112.10752)
- 🔥 **Classifier-Free Diffusion Guidance** (Ho & Salimans, 2022) - [arXiv](https://arxiv.org/abs/2207.12598)
- **Flow Matching for Generative Modeling** (Lipman et al., 2023) - [arXiv](https://arxiv.org/abs/2210.02747)

## Distillation

- **Progressive Distillation for Fast Sampling of Diffusion Models** (Salimans & Ho, 2022) - [arXiv](https://arxiv.org/abs/2202.00512)
- **Consistency Models** (Song et al., 2023) - [arXiv](https://arxiv.org/abs/2303.01469)
- **Diffusion Distillation for Video** (SVD-XT, etc.)

## Control & Conditioning

- 🔥🔥 **Adding Conditional Control to Text-to-Image Diffusion Models** (ControlNet, Zhang et al., 2023) - [arXiv](https://arxiv.org/abs/2302.05543)
- **T2I-Adapter: Learning Adapters to Dig out More Controllable Ability for Text-to-Image Diffusion Models** (Mou et al., 2023) - [arXiv](https://arxiv.org/abs/2302.08453)
- **IP-Adapter: Text Compatible Image Prompt Adapter for Text-to-Image Diffusion Models** (Ye et al., 2023) - [arXiv](https://arxiv.org/abs/2308.06721)
- **Uni-ControlNet: All-in-One Control to Text-to-Image Diffusion Models** (Zhao et al., 2023) - [arXiv](https://arxiv.org/abs/2305.16322)

## Video Generation

- 🔥 **Video Diffusion Models** (Ho et al., 2022) - [arXiv](https://arxiv.org/abs/2204.03458)
- 🔥 **AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning** (Guo et al., 2023) - [arXiv](https://arxiv.org/abs/2307.04725)
- 🔥 **Stable Video Diffusion: Scaling Latent Video Diffusion Models to Large Datasets** (Blattmann et al., 2023) - [arXiv](https://arxiv.org/abs/2311.15127)
- **SVD-XT** - Extended video diffusion
- 🚀 **Open-Sora** - Open-source video generation
- 🚀 **Open-Sora 2** - Open-source video generation (2024-2025)
- 🚀 **Lumiere: A Space-Time Diffusion Model for Video Generation** (Bar-Tal et al., 2024) - [arXiv](https://arxiv.org/abs/2401.12945)
- 🚀 **Consistent Video Diffusion** - Video generation with temporal consistency (2024-2025)

## World Models

- **Dreamer: Learning Models by Imagination** (Hafner et al., 2020) - [arXiv](https://arxiv.org/abs/1912.01603)
- **Mastering Diverse Domains through World Models** (DreamerV3, Hafner et al., 2023) - [arXiv](https://arxiv.org/abs/2301.04104)
- 🚀 **Generative Interactive Environments** (Genie, DeepMind, 2024)
- 🚀 **World simulation models** - Physics-based generation (2024-2025)
- 🚀 **3D/4D diffusion for robotics** - Robotic applications (2024-2025)

---

# 3. 🏛️ Core 3D Vision

## Geometry

- 📖 **Multiple View Geometry in Computer Vision** (Hartley & Zisserman) - Camera models, epipolar geometry
- **A Flexible New Technique for Camera Calibration** (Zhang, 2000) - Camera calibration method

## Structure-from-Motion

- 🔥 **COLMAP** - [colmap.github.io](https://colmap.github.io/)
- **OpenMVG** - Open-source SfM library
- **Bundler** - SfM software

## Multi-View Stereo

- 🔥 **MVSNet: Depth Inference for Unstructured Multi-view Stereo** (Yao et al., 2018) - [arXiv](https://arxiv.org/abs/1804.02505)
- **PatchmatchNet: Learned Multi-View Patchmatch Stereo** (Wang et al., 2021) - [arXiv](https://arxiv.org/abs/2012.01411)
- **CasMVSNet: Cascade Cost Volume for High-Resolution Multi-View Stereo** (Gu et al., 2020) - [arXiv](https://arxiv.org/abs/1912.06378)
- **AirMVS** - Multi-view stereo approach

## SLAM

- 📖 **ORB-SLAM: A Versatile and Accurate Monocular SLAM System** (Mur-Artal et al., 2015) - [arXiv](https://arxiv.org/abs/1502.00956)
- **Direct Sparse Odometry** (DSO, Engel et al., 2016) - [arXiv](https://arxiv.org/abs/1607.02565)
- 🔥 **Neural Implicit SLAM** (NICE-SLAM, Zhu et al., 2022) - [arXiv](https://arxiv.org/abs/2112.12130)
- 🔥 **DROID-SLAM: Deep Visual SLAM for Monocular, Stereo, and RGB-D Cameras** (Teed & Deng, 2021) - [arXiv](https://arxiv.org/abs/2108.10869)
- 🚀 **Gaussian-SLAM: Photo-realistic Dense SLAM with Gaussian Splatting** (2024)

---

# 4. 🌀 Optical Flow, Matching, Temporal Geometry

## Optical Flow

- 📖 **FlowNet: Learning Optical Flow with Convolutional Networks** (Dosovitskiy et al., 2015) - [arXiv](https://arxiv.org/abs/1504.06852)
- **FlowNet 2.0: Evolution of Optical Flow Estimation with Deep Networks** (Ilg et al., 2017) - [arXiv](https://arxiv.org/abs/1612.01925)
- 🔥 **PWC-Net: CNNs for Optical Flow Using Pyramid, Warping, and Cost Volume** (Sun et al., 2018) - [arXiv](https://arxiv.org/abs/1709.02371)
- 🔥 **RAFT: Recurrent All-Pairs Field Transforms for Optical Flow** (Teed & Deng, 2020) - [arXiv](https://arxiv.org/abs/2003.12039)
- **GMFlow: Learning Optical Flow via Global Matching** (Xu et al., 2022) - [arXiv](https://arxiv.org/abs/2111.13680)
- 🚀 **Two-Stream Encoder-Decoder Network for Efficient Optical Flow Estimation** (TEED, 2024)

## Feature Matching

- 🔥 **LoFTR: Detector-Free Local Feature Matching with Transformers** (Sun et al., 2021) - [arXiv](https://arxiv.org/abs/2104.00680)
- **COTR: Correspondence Transformer for Matching Across Images** (Jiang et al., 2021) - [arXiv](https://arxiv.org/abs/2103.14167)
- 🔥 **LightGlue: Local Feature Matching at Light Speed** (Lindenberger et al., 2023) - [arXiv](https://arxiv.org/abs/2306.13643)
- 🔥 **DUST3R: Geometric 3D Vision Made Easy** (Dang et al., 2024) - [arXiv](https://arxiv.org/abs/2312.14132)
- 🚀 **Mega-DUST3R** - Multi-view matching (2024-2025)

## Scene Flow

- **Neural Scene Flow Fields for Space-Time View Synthesis of Dynamic Scenes** (NSFF, Li et al., 2021) - [arXiv](https://arxiv.org/abs/2011.13084)
- **RigidFlow / DynFlow** - Scene flow methods
- **Neural Scene Flow Fields** - Temporal scene understanding

---

# 5. 🔥 Neural Rendering (Implicit Representations)

## NeRF Core

- 📖🔥🔥 **NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis** (Mildenhall et al., 2020) - [arXiv](https://arxiv.org/abs/2003.08934) | [Project](https://www.matthewtancik.com/nerf)
- 🔥 **NeRF++: Analyzing and Improving Neural Radiance Fields** (Zhang et al., 2020) - [arXiv](https://arxiv.org/abs/2010.07492)
- 🔥 **Mip-NeRF: A Multiscale Representation for Anti-Aliasing Neural Radiance Fields** (Barron et al., 2021) - [arXiv](https://arxiv.org/abs/2103.13415)
- **PlenOctrees for Real-time Rendering of Neural Radiance Fields** (Yu et al., 2021) - [arXiv](https://arxiv.org/abs/2103.14024)
- **Plenoxels: Radiance Fields without Neural Networks** (Fridovich-Keil et al., 2022) - [arXiv](https://arxiv.org/abs/2112.05131)

## Acceleration

- 🔥🔥 **Instant Neural Graphics Primitives with a Multiresolution Hash Encoding** (Instant-NGP, Müller et al., 2022) - [arXiv](https://arxiv.org/abs/2201.05989)
- 🔥 **Zip-NeRF: Anti-Aliased Grid-Based Neural Radiance Fields** (Barron et al., 2023) - [arXiv](https://arxiv.org/abs/2304.06706)
- **TensoRF: Tensorial Radiance Fields** (Chen et al., 2022) - [arXiv](https://arxiv.org/abs/2203.09517)
- **Direct Voxel Grid Optimization** (DVGO, Sun et al., 2022) - [arXiv](https://arxiv.org/abs/2111.11215)

## Appearance & Relighting

- **NeRFactor: Neural Factorization of Shape and Reflectance under an Unknown Illumination** (Bi et al., 2021) - [arXiv](https://arxiv.org/abs/2006.04970)
- **Ref-NeRF: Structured View-Dependent Appearance for Neural Radiance Fields** (Verbin et al., 2022) - [arXiv](https://arxiv.org/abs/2112.03907)
- **Neural Reflectance Fields** - Material properties

---

# 6. 🟡 Gaussian Splatting

## Core

- 🔥🔥🔥 **3D Gaussian Splatting for Real-Time Radiance Field Rendering** (Kerbl et al., 2023) - [arXiv](https://arxiv.org/abs/2308.04079) | [Project](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/)
- **Real-time Rendering with Gaussians** - Performance optimizations
- 🚀 **InstantSplat** - Fast Gaussian splatting (2024-2025)

## Extensions

- 🔥 **4D Gaussian Splatting for Real-Time Dynamic Scene Rendering** (Luiten et al., 2024) - [arXiv](https://arxiv.org/abs/2310.08528)
- 🚀 **Spacetime Gaussians** - 4D Gaussian splatting (2024-2025)
- 🚀 **4D Gaussian tracking models** - Temporal Gaussians (2024-2025)
- **Animatable Gaussians** - Deformable Gaussians
- **Splat-based avatars** - Human representations
- **Gaussian surfels** - Surface representations
- **Gaussian primitives for editing** - Interactive editing

## Hybrid

- **SDS + Gaussian optimization** - Score distillation with Gaussians
- **Gaussian Dreamer** - Generation with Gaussians

---

# 7. 🧬 Score Distillation & Generative 3D

## SDS Core

- 🔥🔥🔥 **DreamFusion: Text-to-3D using 2D Diffusion** (Poole et al., 2022) - [arXiv](https://arxiv.org/abs/2209.14988) | [Project](https://dreamfusion3d.github.io/)
- 🔥 **Magic3D: High-Resolution Text-to-3D Content Creation** (Lin et al., 2023) - [arXiv](https://arxiv.org/abs/2211.10440)
- 🔥 **Fantasia3D: Disentangling Geometry and Appearance for High-quality Text-to-3D Content Creation** (Chen et al., 2023) - [arXiv](https://arxiv.org/abs/2303.13818)
- 🔥 **ProlificDreamer: High-Fidelity and Diverse Text-to-3D Generation with Variational Score Distillation** (Wang et al., 2023) - [arXiv](https://arxiv.org/abs/2305.16213)
- **SJC vs SDS analysis papers** - Understanding the methods

## 2D→3D Lifting

- 🔥 **Zero-1-to-3: Zero-shot One Image to 3D Object** (Liu et al., 2023) - [arXiv](https://arxiv.org/abs/2303.11328)
- 🔥 **Zero-1-to-3++: Image to 3D Object Generation via Ange-Quantized Gaussian Splatting** (2024)
- 🔥 **Wonder3D: Single Image to 3D using Cross-Domain Diffusion** (Long et al., 2023) - [arXiv](https://arxiv.org/abs/2310.15008)
- 🔥 **SyncDreamer: Generating Multiview-consistent Images from a Single-view Image** (Liu et al., 2023) - [arXiv](https://arxiv.org/abs/2309.03453)
- **LGM: Large Multi-View Gaussian Model for High-Resolution 3D Reconstruction** (2024)
- 🚀 **OpenShape v2** - 3D shape generation (2024-2025)

## Implicit 3D Generation

- **GIRAFFE: Representing Scenes as Compositional Generative Neural Feature Fields** (Niemeyer & Geiger, 2021) - [arXiv](https://arxiv.org/abs/2011.12100)
- **EG3D: Efficient Geometry-aware 3D Generative Adversarial Networks** (Chan et al., 2022) - [arXiv](https://arxiv.org/abs/2112.07945)
- **GET3D: A Generative Model of High Quality 3D Textured Shapes Learned from Images** (Gao et al., 2022) - [arXiv](https://arxiv.org/abs/2209.11163)
- **StyleSDF: High-Resolution 3D-Consistent Image and Geometry Generation** (Or-El et al., 2022) - [arXiv](https://arxiv.org/abs/2112.11427)
- **pi-GAN: Periodic Implicit Generative Adversarial Networks for 3D-Aware Image Synthesis** (Chan et al., 2021) - [arXiv](https://arxiv.org/abs/2012.00926)

## Scene-level

- **SceneDreamer: Unbounded 3D Scene Generation from 2D Image Collections** (2023)
- **Gaussian Scene diffusion** - Scene-level generation
- 🚀 **Scene-level diffusion with 3D consistency** - 3D-aware generation (2024-2025)

---

# 8. 🛰️ 3D Perception (Detection, BEV, Multi-view Transformers)

## Multi-View Transformers

- 🔥🔥 **DETR3D: 3D Object Detection from Multi-view Images via 3D-to-2D Queries** (Wang et al., 2021) - [arXiv](https://arxiv.org/abs/2110.06922)
- 🔥🔥 **PETR: Position Embedding Transformation for Multi-View 3D Object Detection** (Liu et al., 2022) - [arXiv](https://arxiv.org/abs/2203.05625)
- 🔥 **PETRv2: A Unified Framework for 3D Perception from Multi-Camera Images** (Liu et al., 2022) - [arXiv](https://arxiv.org/abs/2206.01256)
- 🔥 **PETRv3: Enhancing 3D Object Detection with Temporal Information** (Liu et al., 2023)
- 🔥 **MV2D: Multi-View 2D Object Detection** (2023)
- **MVDeTr / MVDet** - Multi-view detection variants
- 🚀 **StreamPETR** - Streaming multi-view detection

## BEV Models

- 🔥🔥 **Lift, Splat, Shoot: Encoding Images from Arbitrary Camera Rigs by Implicitly Unprojecting to 3D** (Philion & Fidler, 2020) - [arXiv](https://arxiv.org/abs/2008.05711)
- 🔥 **BEVDet: High-Performance Multi-Camera 3D Object Detection in Bird-Eye-View** (Huang et al., 2021) - [arXiv](https://arxiv.org/abs/2112.11790)
- 🔥 **BEVDet4D: Exploit Temporal Cues in Multi-camera 3D Object Detection** (Huang et al., 2022) - [arXiv](https://arxiv.org/abs/2203.17054)
- 🔥🔥 **BEVFormer: Learning Bird's-Eye-View Representation from Multi-Camera Images via Spatiotemporal Transformers** (Li et al., 2022) - [arXiv](https://arxiv.org/abs/2203.17270)
- 🔥 **BEVFusion: Multi-Task Multi-Sensor Fusion with Unified Bird's-Eye View Representation** (Liu et al., 2022) - [arXiv](https://arxiv.org/abs/2205.13542)
- **SurroundOcc: Multi-Camera 3D Occupancy Prediction for Autonomous Driving** (2023)
- **OccFormer: Dual-path Transformer for 3D Occupancy Prediction** (2024)
- **OccNeXt** - Occupancy prediction

## Monocular 3D Detection

- **FCOS3D: Fully Convolutional One-Stage Monocular 3D Object Detection** (Wang et al., 2021) - [arXiv](https://arxiv.org/abs/2104.10956)
- **CenterNet3D: An Anchor free Object Detector for Point Cloud** (2020)
- **MonoFlex: Monocular 3D Object Detection with Flexible LiDAR Supervision** (2021)
- **PGD: Probabilistic and Geometric Depth** (2021)
- **GUPNet: Geometry Uncertainty Propagation Network for Monocular 3D Object Detection** (2021)
- 🚀 **Depth Anything 3** - Monocular depth estimation (2024-2025)

## Occupancy & Scene Completion

- **Occupancy Networks: Learning 3D Reconstruction in Function Space** (Mescheder et al., 2019) - [arXiv](https://arxiv.org/abs/1812.02828)
- **DeepSDF: Learning Continuous Signed Distance Functions for Shape Representation** (Park et al., 2019) - [arXiv](https://arxiv.org/abs/1901.05103)
- **MonoScene: Monocular 3D Semantic Scene Completion** (Cao & de Charette, 2022) - [arXiv](https://arxiv.org/abs/2112.00726)
- **OccNeXt** - Occupancy prediction
- **SurroundOcc** - Surround-view occupancy

## Trajectory / 4D Detection

- 🔥 **UniAD: Planning-oriented Autonomous Driving** (Hu et al., 2023) - [arXiv](https://arxiv.org/abs/2212.10156)
- **ImmortalTracker: Tracking Objects Even During Periods of Occlusion** (2024)
- **CenterTrack: Tracking Objects as Points** (Zhou et al., 2020) - [arXiv](https://arxiv.org/abs/2004.01177)
- **AB3DMOT: A Baseline for 3D Multi-Object Tracking** (Weng et al., 2020)

---

# 9. 🧍 Humans, Avatars, Neural Citizens

## Parametric Models

- 📖 **SMPL: A Skinned Multi-Person Linear Model** (Loper et al., 2015) - [Project](https://smpl.is.tue.mpg.de/)
- **SMPL-X: Expressive Body Capture: 3D Hands, Face, and Body from a Single Image** (Pavlakos et al., 2019) - [arXiv](https://arxiv.org/abs/1904.05866)
- **STAR: A Sparse Trained Articulated Human Body Regressor** (Osman et al., 2020) - [arXiv](https://arxiv.org/abs/2008.08535)
- **MICA** - Face model
- **PyMAF: 3D Human Pose and Shape Regression with Pyramidal Mesh Alignment Feedback Loop** (2021)

## Neural Humans

- 🔥 **HumanNeRF: Free-viewpoint Rendering of Moving People from Monocular Video** (Weng et al., 2022) - [arXiv](https://arxiv.org/abs/2201.04127)
- **A-NeRF: Articulated Neural Radiance Fields for Learning Human Shape, Appearance, and Pose** (Su et al., 2021) - [arXiv](https://arxiv.org/abs/2102.06199)
- **Animatable NeRF: Learning Pose-Dependent Deformed Radiance Fields for Human Bodies** (Peng et al., 2021) - [arXiv](https://arxiv.org/abs/2106.15484)
- **VoluMorph: Volumetric Morphing** (2022)
- **Neural Body: Implicit Neural Representations with Structured Latent Codes** (Peng et al., 2021) - [arXiv](https://arxiv.org/abs/2003.03473)
- 🚀 **Gaussian avatars v2** - Human rendering (2024-2025)

## Monocular

- 🔥 **PIFu: Pixel-Aligned Implicit Function for High-Resolution Clothed Human Digitization** (Saito et al., 2019) - [arXiv](https://arxiv.org/abs/1905.05172)
- **PIFuHD: Multi-Level Pixel-Aligned Implicit Function for High-Resolution 3D Human Digitization** (Saito et al., 2020) - [arXiv](https://arxiv.org/abs/2004.00452)
- **ICON: Implicit Clothed humans Obtained from Normals** (Xiu et al., 2022) - [arXiv](https://arxiv.org/abs/2112.09127)
- **PaMIR: Parametric Model-Conditioned Implicit Representation for Image-based Human Reconstruction** (Zheng et al., 2021)

## Face Models

- 📖 **3D Morphable Face Models** (3DMM) - Classical face model
- **DECA: Detailed Expression Capture and Animation** (Feng et al., 2021) - [arXiv](https://arxiv.org/abs/2012.04012)
- 🚀 **EMO: Emote Portrait Alive - Generating Expressive Portrait Videos with Audio2Video Diffusion Model** (2024)

---

# 10. 🌪️ Dynamic 4D (Full Motion & Deformation)

## Dynamic NeRFs

- 🔥 **D-NeRF: Neural Radiance Fields for Dynamic Scenes** (Pumarola et al., 2021) - [arXiv](https://arxiv.org/abs/2011.13961)
- 🔥 **HyperNeRF: A Higher-Dimensional Representation for Topologically Varying Neural Radiance Fields** (Park et al., 2021) - [arXiv](https://arxiv.org/abs/2106.13228)
- **Nerfies: Deformable Neural Radiance Fields** (Park et al., 2021) - [arXiv](https://arxiv.org/abs/2011.12948)
- **Neural Scene Flow Fields for Space-Time View Synthesis of Dynamic Scenes** (NSFF, Li et al., 2021) - [arXiv](https://arxiv.org/abs/2011.13084)
- **DyNeRF: Neural Radiance Fields for Dynamic Scenes** (Li et al., 2021)
- **MoNSTER: Monocular Neural Scene Transformation** (2023)
- 🔥 **Dynamic Gaussian Splatting** - Real-time dynamic rendering

## Video-to-3D / 4D

- **Vid2Avatar: 3D Avatar Reconstruction from Videos in the Wild via Self-supervised Scene Decomposition** (2023)
- **Vid2GS: Animating Gaussian Splatting from Videos** (2024)
- **SNAP: Single-Shot Neural Assets with Pose** (2024)
- 🔥 **DynIBaR: Neural Dynamic Image-Based Rendering** (Li et al., 2023) - [arXiv](https://arxiv.org/abs/2211.11082)
- **OmniMotion: Generalizing Neural Motion Fields** (2024)

---

# 11. 🧱 Differentiable Rendering / Inverse Graphics

## Differentiable Rendering

- **Soft Rasterizer: A Differentiable Renderer for Image-based 3D Reasoning** (Liu et al., 2019) - [arXiv](https://arxiv.org/abs/1904.01786)
- **Neural Mesh Renderer: Learning Latent Shape Space with Differentiable Renderer** (Kato et al., 2018) - [arXiv](https://arxiv.org/abs/1711.07566)
- **DIB-R: Differentiable Rendering of Rasterization** (Chen et al., 2019) - [arXiv](https://arxiv.org/abs/1908.01210)
- **DiffRender** - Differentiable rendering approaches
- **PyTorch3D Renderer** - [pytorch3d.org](https://pytorch3d.org/)

## Inverse Rendering

- **NeRFactor: Neural Factorization of Shape and Reflectance under an Unknown Illumination** (Bi et al., 2021)
- **Inverse Face Rendering** - Material estimation
- **Relightable NeRF** - Lighting reconstruction
- **Physically-based Neural Fields** - Material properties

---

# 12. ⚙️ Practical Libraries & Tools

- **COLMAP** - [colmap.github.io](https://colmap.github.io/) - Structure-from-Motion
- **Open3D** - [open3d.org](http://www.open3d.org/) - 3D data processing
- **PyTorch3D** - [pytorch3d.org](https://pytorch3d.org/) - 3D deep learning
- **Kaolin** - [kaolin.readthedocs.io](https://kaolin.readthedocs.io/) - 3D deep learning library
- **Nerfstudio** - [nerf.studio](https://nerf.studio/) - NeRF framework
- **tiny-cuda-nn** - Fast CUDA neural networks
- **gaussiansplatting** - [repo-sam.inria.fr](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/) - Official implementation
- **OpenMMLab** - [openmmlab.com](https://www.openmmlab.com/) - mmdetection3d, mmcv, mmengine
- **Datasets:** Waymo, nuScenes, ScanNet

---
