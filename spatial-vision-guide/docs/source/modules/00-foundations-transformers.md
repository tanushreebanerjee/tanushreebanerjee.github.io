# Transformers & Attention


---

## Overview

Transformer architecture and attention mechanisms. Used in modern vision models, multi-view transformers, and BEV methods.

---

## Essential Papers

### 🔥 Attention Is All You Need (2017)

**Vaswani et al.** | [arXiv](https://arxiv.org/abs/1706.03762)

**Key idea:** Self-attention mechanism replaces recurrent layers for sequence modeling.

**Components:**
- **Multi-head attention**: Multiple attention heads capture different relationships
- **Self-attention**: $Attention(Q, K, V) = softmax(\frac{QK^T}{\sqrt{d_k}})V$
- **Positional encoding**: Adds position information to input embeddings
- **Feed-forward networks**: Point-wise MLPs
- **Layer normalization**: Normalizes activations

**Impact**: Foundation for modern NLP and vision transformers.

---

### 🔥 Vision Transformer (ViT) (2020)

**An Image is Worth 16x16 Words** (Dosovitskiy et al.) | [arXiv](https://arxiv.org/abs/2010.11929)

**Key idea:** Apply transformer architecture directly to image patches.

**Architecture:**
1. Split image into patches (e.g., 16×16)
2. Linear projection to embeddings
3. Add positional embeddings
4. Transformer encoder (self-attention + MLP)
5. Classification head

[Figure placeholder: ViT architecture diagram]

**Advantages**: Global receptive field, scales well with data.

**Limitations**: Requires large datasets (ImageNet-21k, JFT-300M) for good performance.

---

### 🔥 DeiT (2021)

**Training data-efficient image transformers** (Touvron et al.) | [arXiv](https://arxiv.org/abs/2012.12877)

**Key innovation**: Knowledge distillation from CNN teacher to train ViT on ImageNet.

**Components:**
- Distillation token (learns from teacher)
- Data augmentation strategies
- Efficient training without massive datasets

Enables ViT to work well on ImageNet-scale data.

---

### 🔥 Swin Transformer (2021)

**Swin Transformer: Hierarchical Vision Transformer using Shifted Windows** (Liu et al.) | [arXiv](https://arxiv.org/abs/2103.14030)

**Key idea:** Hierarchical transformer with shifted windows for efficient computation.

**Features:**
- **Window-based attention**: Limits self-attention to local windows
- **Shifted windows**: Connects windows across layers
- **Hierarchical structure**: Multi-scale feature maps (like CNNs)

**Advantages**: Linear complexity with respect to image size, works as backbone for detection/segmentation.

[Figure placeholder: Swin transformer shifted window pattern]

---

## Key Concepts

### Self-Attention Mechanism

**Query (Q), Key (K), Value (V)**: Three learned linear projections.

**Attention score**: Measures relevance between positions: $QK^T$

**Attention weights**: Softmax of scores, normalize to probabilities.

**Output**: Weighted sum of values based on attention weights.

**Interpretation**: Each position "attends" to relevant positions in the sequence.

---

### Multi-Head Attention

Multiple attention heads in parallel capture different types of relationships.

**Formula**: $MultiHead(Q, K, V) = Concat(head_1, ..., head_h)W^O$ where each head is independent attention.

**Benefits**: Captures different relationships (e.g., local vs. global, different semantic concepts).

---

### Positional Encoding

**Problem**: Attention is permutation-invariant, needs position information.

**Solutions**:
- **Absolute positional encoding**: Sinusoidal functions of position indices
- **Learned positional embeddings**: Learned parameters
- **Relative positional encoding**: Encodes relative positions (RoPE)

---

### Layer Normalization

Normalizes activations across features for each sample.

**Formula**: $LN(x) = \gamma \frac{x - \mu}{\sigma} + \beta$ where $\mu, \sigma$ are computed per sample.

**Benefits**: Stabilizes training, enables deeper networks.

---

## Optimizations

### FlashAttention (2022)

**Dao et al.** | [arXiv](https://arxiv.org/abs/2205.14135)

**Key idea**: Reduce memory usage of attention by tiling computation.

**Benefits**: Faster training, enables longer sequences, reduces memory from $O(n^2)$ to $O(n)$.

---

### Multi-Query Attention (MQA)

**Key idea**: Share keys and values across heads, only queries are separate.

**Benefits**: Reduces memory and computation while maintaining quality.

Used in: LLaMA, PaLM, modern LLMs.

---

## Vision Transformer Variants

**DeiT**: Efficient training with distillation

**Swin**: Hierarchical, window-based attention

**PVT (Pyramid Vision Transformer)**: Multi-scale feature pyramid

**PVTv2**: Improved PVT with overlapping patch embedding

---

## Problems Solved by Transformers in Vision

### Long-Range Dependencies
**Problem**: CNNs have limited receptive fields. Long-range spatial relationships (e.g., object relationships across image) hard to capture.

**Self-attention solution**: Attention mechanism enables direct connections between any two positions. Models long-range dependencies naturally.

[Figure placeholder: Comparison showing CNN receptive field (local) vs transformer attention (global)]

### Sequence Modeling in Vision
**Problem**: Vision tasks can be framed as sequence problems (patches, objects, views). Need architecture that handles sequences well.

**Transformer solution**: Originally designed for sequences (text), naturally adapts to vision sequences (image patches, object queries, multi-view features).

### Set-Based Prediction
**Problem**: Object detection traditionally uses anchors, NMS. Need architecture that naturally handles variable number of objects.

**DETR solution**: Query-based architecture predicts set of objects directly. No anchors, no NMS needed.

### Multi-View Feature Fusion
**Problem**: How to aggregate features from multiple camera views? Traditional methods use explicit operations (pooling, concatenation).

**Transformer solution**: Attention naturally aggregates features across views. Learnable feature fusion.

---

## Remaining Challenges and Limitations

### Computational Cost
**Problem**: Self-attention is $O(n^2)$ in sequence length. High-resolution images or long sequences can be expensive.

**Current solutions**: Efficient attention variants (Flash Attention, sparse attention, windowed attention), but trade-offs remain.

**Open question**: Linear or sub-quadratic attention with same expressiveness?

### Inductive Biases
**Problem**: Transformers lack spatial inductive biases that CNNs have (translation equivariance, locality). May need more data to learn these.

**Current solutions**: Hybrid architectures (CNN + Transformer), positional encodings, but still less sample-efficient than CNNs in some cases.

**Open question**: Better inductive biases for vision transformers?

### Training Stability
**Problem**: Transformers can require careful initialization, learning rate schedules, warmup.

**Open question**: More stable training? Better initialization strategies?

### Interpretability
**Problem**: Understanding what transformers learn, which parts of image they attend to, can be challenging.

**Open question**: Better interpretability? Understanding attention patterns?

---

## Broader Insights and Implications

### Unified Architecture Across Modalities
**Insight**: Transformers work well for text, images, audio, 3D. Unified architecture across modalities enables multi-modal models.

**Broader impact**: Enables unified architectures (vision-language, multi-modal). Foundation for models like CLIP, GPT-4V. Influences design of multi-modal systems.

### Attention as Universal Mechanism
**Insight**: Attention mechanism is general mechanism for information routing. Works across many tasks and modalities.

**Broader impact**: Demonstrates power of attention. Influences design of many modern architectures beyond transformers.

### The Shift from Convolution to Attention
**Insight**: Transformers show that attention can replace or complement convolutions. Different inductive biases, different strengths.

**Broader impact**: Challenges dominance of CNNs. Hybrid approaches often best. Encourages exploration beyond convolutional architectures.

### Scaling Laws
**Insight**: Transformers show strong scaling behavior - larger models, more data → better performance. Predictable improvements with scale.

**Broader impact**: Validates scaling hypothesis. Encourages investment in larger models and datasets. Influences research priorities.

### Query-Based Architectures
**Insight**: Query-based architectures (DETR) show that set prediction can be learned directly. No need for anchors or post-processing.

**Broader impact**: Influences design of detection and other vision architectures. Challenges traditional pipeline designs. Encourages end-to-end learning.

[Placeholder for manual expansion: Add insights about impact on computer vision field, connections to other areas, future directions]

---

## Connections to 3D Vision

**Multi-view transformers**: Use transformer attention to fuse multi-view features (DETR3D, PETR).

**BEV methods**: Transformers aggregate features from multiple cameras to BEV space (BEVFormer).

**Attention in NeRF**: Some methods use attention for view-dependent effects.

[Figure placeholder: Diagram showing transformer applications in 3D vision: multi-view fusion, BEV aggregation, attention mechanisms]

---

## Related Modules

- Module 1.1: Self-Supervised Learning (DINO uses ViT)
- Module 1.2: Multimodal Models (CLIP uses ViT encoder)
- Module 8.1: Multi-View Transformers
- Module 8.2: BEV Models

---

## Additional Resources

- **The Illustrated Transformer**: [jalammar.github.io/illustrated-transformer](https://jalammar.github.io/illustrated-transformer/)
- **An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale**: Original ViT paper
- **timm library**: PyTorch image models, includes many ViT variants

---

<div style="text-align: center; margin-top: 2em;">
</div>
