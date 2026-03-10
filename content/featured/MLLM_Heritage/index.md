---
date: '2025.11'
type: '<span style="color: #3D3D3D"><em>npj Heritage Science</em>, 2026</span>'
title: 'Synthetic Data Generation with Spatial and Semantic Fidelity for Multimodal Large Language Model on Architectural Heritage Interpretation'
author: '<u>Rong Huang</u>, Haichuan Lin, Wei Zeng<sup>*</sup>'
cover: 'demo3.png'
slug: 'mllm-heritage'
tech:
  - Architectural Heritage
  - Synthetic Data Generation
  - Generative AI
  - Multi-modal Large Language Models
showInProjects: true
excerpt: >
  <span style="color: #3D3D3D">In this project, we tackle the data scarcity that limits MLLMs in architectural heritage interpretation. We build a <u>structure-aware and semantic-aware diffusion pipeline</u> to generate a large, <u>high-fidelity VQA dataset</u> (59,884 VQA). Through systematic fine-tuning experiments, our augmented data significantly improves 7B models' reasoning, surpassing commercial MLLMs.</span>
---

## Abstract

Recent advances in multimodal large language models (MLLMs) present transformative potential for architectural heritage interpretation - a critical task for urban historical analysis and preservation. However, our preliminary study reveals that state-of-the-art MLLMs struggle with accurate interpretation when evaluated against a comprehensive visual question answering (VQA) taxonomy, particularly in analyzing the nuanced spatial structure and semantic information of architectural heritage.
These limitations stem from a critical bottleneck in large-scale, high-fidelity architectural heritage training dataset creation, which manual approaches and digital collection techniques fail to simultaneously achieve the required scale and semantic depth. To address this gap, we introduce a novel data augmentation framework integrating both structural- and semantic-aware modules into a diffusion model.
The framework generates 1,672 high-fidelity synthetic architectural images paired with 59,884 VQA samples. Quantitative evaluations confirm that the synthetic images preserve structural and semantic fidelity comparable to real-world samples, and MLLMs fine-tuned on this dataset show enhanced performance in spatial and semantic reasoning tasks while avoiding overfitting or interference effects.
The results demonstrate that our framework addresses fundamental data constraints to enhance MLLMs for architectural heritage interpretation, enabling a transition from specialized models to general-purpose, instruction-following MLLMs capable of supporting diverse domain tasks.

---

## Does exisiting MLLMs perform well in architectural interpretation?

![VQA Taxonomy and Framework Overview](/images/mllm-heritage-demo.png)

We construct six task types aligned with three essential MLLM capabilities for architectural interpretation: visual perception, spatial reasoning, and contextual reasoning.
Using this benchmark, we evaluate leading commercial MLLMs on 2,640 expert-curated VQA pairs.
The results shows that **current MLLMs perform poorly on architectural interpretation.**
Models often misidentify elements, misjudge spatial relationships, and fail on contextual assessments.

---

## Problem We Aim to Solve

**Enabling MLLMs to understand architectural heritage as experts do, beyond pattern recognition, toward visual perception, spatial reasoning, and contextual reasoning.**

MLLMs require large, high-fidelity training data to acquire these capabilities.
Crucially, they must see diverse and systematically varied combinations of structural forms and semantic attributes in order to learn robust spatial–semantic patterns.
However, architectural heritage are often limited in scale, offering a narrow set of such pairings.

This work addresses this gap by using **a synthetic data pipeline** to expand heritage training data at scale.

<!-- This requires models to answer three core questions:

- **What is it?** — Visual perception capability
- **Where is it?** — Spatial reasoning capability
- **Why does it matter?** — Contextual reasoning capability -->

---

## Our Work

**Technical challenge:** Existing generative models cannot produce heritage data that keeps structure and semantics consistent at scale. Most critically, they often treat structure and semantics as an entangled pattern, making it impossible to generate systematic combinations of layouts, stylistic attributes.

To overcome the lack of large architectural heritage data, we build a synthetic data pipeline that expands real-world façades into a much richer training set.
The key idea is to generate new images that follow authentic architectural layouts while allowing controlled variation in materials, styles, and other visual attributes.
This gives MLLMs access to many more combinations of structural and semantic features than what existing datasets can provide.

We first curated a façades VQA dataset based on real-world façades images, as a foundation for dataset augmentation using our pipeline. These real façades provide the structural layouts and semantic references that our method builds upon.
![Self-curated dataset](/images/mllm-heritage-fig2.png)

Our approach is based on a dual-control generative framework. We use layout annotations from real façades to guide the geometric structure of each synthetic sample, and we train lightweight style modules to adjust appearance and contextual cues.
By pairing any layout with any style module, the system can create large numbers of diverse yet coherent façade images that remain realistic and suitable for VQA annotation.
This expanded dataset forms the basis for fine-tuning MLLMs on architectural interpretation task

![Generative Results](/images/mllm-heritage-fig1.png)

---

## Results & Discussion

In this project, we build a **structure-aware and semantic-aware diffusion pipeline** to generate a large, **high-fidelity VQA dataset** (59,884 VQA).
Through systematic fine-tuning experiments, our augmented data significantly improves 7B models' reasoning, surpassing commercial MLLMs.
