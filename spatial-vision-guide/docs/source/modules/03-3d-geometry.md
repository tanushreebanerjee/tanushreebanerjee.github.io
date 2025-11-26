# Geometry & Camera Models


---

## Overview

3D geometric foundations: camera models, coordinate transformations, epipolar geometry.

---

## Resources

### Multiple View Geometry (Hartley & Zisserman)

Standard textbook for geometric computer vision.

**Chapters 1-6**: Camera models, projective geometry, epipolar geometry.

---

## Core Concepts

### Camera Models

#### Pinhole Camera

**Projection**: 3D point $(X, Y, Z)$ projects to 2D $(x, y)$:

$$
\begin{bmatrix} x \\ y \\ 1 \end{bmatrix} = \frac{1}{Z} K \begin{bmatrix} R & t \end{bmatrix} \begin{bmatrix} X \\ Y \\ Z \\ 1 \end{bmatrix}
$$

**Intrinsic matrix** $K$:
$$
K = \begin{bmatrix}
f_x & s & c_x \\
0 & f_y & c_y \\
0 & 0 & 1
\end{bmatrix}
$$
- $f_x, f_y$: Focal lengths (pixels)
- $c_x, c_y$: Principal point (optical center)
- $s$: Skew (usually 0)

**Extrinsic parameters** $[R|t]$:
- $R$: Rotation matrix (3×3)
- $t$: Translation vector (3×1)

[Figure placeholder: Pinhole camera model diagram showing world, camera, and image coordinate frames]

---

### Coordinate Transformations

**World to camera**: $X_c = RX_w + t$

**Camera to image**: $x = KX_c$ (homogeneous coordinates)

**Image to normalized**: $x_n = K^{-1}x$ (removes intrinsics)

---

### Camera Calibration

**Goal**: Estimate intrinsic parameters $K$ and distortion coefficients.

**Zhang's method** (2000):
1. Capture multiple images of checkerboard from different poses
2. Detect corners in each image
3. Estimate homography from plane to image
4. Extract intrinsic parameters from homographies
5. Refine with bundle adjustment

**Distortion models**:
- **Radial distortion**: $x_d = x(1 + k_1 r^2 + k_2 r^4 + k_3 r^6)$
- **Tangential distortion**: Additional terms for decentering

---

### Epipolar Geometry

**Epipolar constraint**: Corresponding points lie on epipolar lines.

**Fundamental matrix** $F$:
- Relates corresponding points: $x_2^T F x_1 = 0$
- Rank 2, 7 degrees of freedom
- Estimated from point correspondences (8-point algorithm)

**Essential matrix** $E$:
- $E = K_2^T F K_1$ (known intrinsics)
- $E = [t]_\times R$ (rotation and translation)
- Can recover $R, t$ from $E$ (up to scale)

[Figure placeholder: Epipolar geometry showing two camera views, epipolar lines, and epipoles]

---

### Triangulation

**Goal**: Recover 3D point from 2D correspondences in multiple views.

**Linear triangulation**: Solve $x_i \times (P_i X) = 0$ for 3D point $X$.

**Non-linear refinement**: Minimize reprojection error.

**Applications**: Structure-from-Motion, multi-view stereo.

---

### Homogeneous Coordinates

**3D point**: $(X, Y, Z, 1)$ or $(X, Y, Z, w)$

**2D point**: $(x, y, 1)$ or $(x, y, w)$

**Benefits**:
- Unified representation of points at infinity
- Linear transformations (matrix multiplication)
- Projective geometry operations

---

## Mathematical Foundations

### Cross Product Matrix

**Skew-symmetric matrix** $[t]_\times$:
$$
[t]_\times = \begin{bmatrix}
0 & -t_z & t_y \\
t_z & 0 & -t_x \\
-t_y & t_x & 0
\end{bmatrix}
$$

**Property**: $[t]_\times x = t \times x$ (cross product)

Used in essential matrix: $E = [t]_\times R$

---

### Rotation Representations

**Rotation matrix** $R \in SO(3)$:
- Orthogonal: $R^T R = I$
- Determinant: $\det(R) = 1$
- 3 degrees of freedom

**Euler angles**: Roll, pitch, yaw (parameterization issues)

**Axis-angle**: $(n, \theta)$ - rotation around axis $n$ by angle $\theta$

**Quaternions**: $q = w + xi + yj + zk$ (smooth interpolation)

---

## Problems Solved by 3D Geometry

### Mathematical Foundation for 3D Vision
**Problem**: Need mathematical framework to understand how 3D world projects to 2D images. Basis for all 3D vision tasks.

**Solution**: Established geometric theory (projective geometry, epipolar geometry, camera models) provides rigorous mathematical foundation.

[Figure placeholder: Diagram showing how geometric principles underpin all 3D vision: camera projection → 3D reconstruction → rendering → perception]

### Camera Calibration
**Problem**: Real cameras have unknown parameters (focal length, distortion, principal point). Need calibration for accurate 3D reconstruction.

**Zhang's method solution**: Simple, accurate calibration from checkerboard images. Enables practical camera calibration.

### Epipolar Constraint
**Problem**: Finding correspondences between images is challenging. Need geometric constraint to guide search.

**Epipolar geometry solution**: Epipolar constraint restricts search space to epipolar lines. Reduces correspondence problem from 2D search to 1D search.

### 3D Reconstruction from 2D
**Problem**: How to recover 3D structure from 2D images? Fundamentally ambiguous problem.

**Triangulation solution**: Geometric principle: intersection of rays from multiple views gives 3D point. Enables 3D reconstruction from correspondences.

---

## Remaining Challenges and Limitations

### Scale Ambiguity
**Problem**: Monocular vision cannot determine absolute scale. Only relative scale can be recovered (up to scale factor).

**Remaining**: Fundamental limitation. Need additional information (known object size, sensor data) to recover absolute scale.

### Degenerate Configurations
**Problem**: Some camera/viewpoint configurations are degenerate (coplanar points, pure rotation, etc.). Cannot recover structure.

**Remaining**: Need to detect and handle degenerate cases.

### Numerical Stability
**Problem**: Geometric computations can be numerically unstable (near-singular matrices, small baselines).

**Remaining**: Requires careful implementation, robust numerical methods.

### Non-Linear Optimization Challenges
**Problem**: Bundle adjustment is non-linear optimization. Can get stuck in local minima, sensitive to initialization.

**Remaining**: Ongoing research in robust optimization, better initialization strategies.

---

## Broader Insights and Implications

### The Power of Mathematical Rigor
**Insight**: Established geometric theory provides rigorous foundation. Well-understood mathematics enables reliable algorithms.

**Broader impact**: Demonstrates value of mathematical foundations. Rigorous theory enables practical algorithms. Influences design of 3D vision systems.

### Projective Geometry Simplifies 3D Vision
**Insight**: Projective geometry (homogeneous coordinates) simplifies many 3D vision problems. Enables linear formulations.

**Broader impact**: Shows how right mathematical framework simplifies problems. Influences mathematical approaches to other vision problems.

### The Fundamental Ambiguities
**Insight**: 3D vision has fundamental ambiguities (scale, depth). Mathematics makes these explicit, shows what can and cannot be recovered.

**Broader impact**: Highlights importance of understanding limitations. Not everything is recoverable. Need additional constraints or assumptions.

### Geometry vs Learning
**Insight**: Geometry provides principled foundation. Learning can improve robustness, but geometry provides understanding and guarantees.

**Broader impact**: Demonstrates that geometry and learning complement each other. Best methods combine both. Influences hybrid approaches.

[Placeholder for manual expansion: Add insights about impact on all 3D vision, connections to other mathematical areas, practical applications]

---

## Applications

### Stereo Vision

**Rectification**: Align images so epipolar lines are horizontal.

**Disparity**: $d = x_l - x_r$ (horizontal offset)

**Depth**: $Z = \frac{fB}{d}$ where:
- $f$: Focal length
- $B$: Baseline (distance between cameras)
- $d$: Disparity

[Figure placeholder: Stereo vision diagram showing two cameras, rectified images, disparity map, depth calculation]

---

### Multi-View Geometry

**Bundle adjustment**: Jointly optimize camera poses and 3D structure.

**Cost function**: Sum of squared reprojection errors.

**Optimization**: Levenberg-Marquardt or Gauss-Newton.

[Figure placeholder: Bundle adjustment visualization showing camera poses and 3D points being optimized]

---

## Related Modules

- Module 0.2: Classical Computer Vision (feature matching)
- Module 3.2: Structure-from-Motion (applies this geometry)
- Module 3.3: Multi-View Stereo (depth estimation)
- Module 8.1: Multi-View Transformers (camera calibration needed)

---

## Additional Resources

- **OpenCV Camera Calibration**: [docs.opencv.org](https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html)
- **COLMAP**: Structure-from-Motion software using these concepts
- **Multiple View Geometry in Computer Vision**: Detailed mathematical treatment

---

<div style="text-align: center; margin-top: 2em;">
</div>
