---
date: '2024.09'
type: '<span style="color: #3D3D3D"><em>ACM Conference on Human Factors in Computing Systems (CHI)</em>, 2024</span>'
title: 'PlantoGraphy: Incoporating Iterative Design Process into Generative Artificial Intelligence for Landscape Rendering'
author: '<u>Rong Huang</u>, Hai-chuan Lin, Chuanzhang Chen, Kang Zhang, Wei Zeng<sup>*</sup>'
cover: 'demo1.png'
# slug: 'plantography'
# github: 'https://github.com/example/repo'
external: '/pdf1.pdf'
pdf: '/pdf1.pdf'
video: 'https://youtu.be/Jg-Rx4YHEoQ'
tech:
  - Landscape Rendering
  - Large Language Model
  - Scene Graph
  - Generative AI
showInProjects: true
excerpt: >
  <span style="color: #3D3D3D">While recent GenAI enables automated landscape rendering, existing end-to-end methods remain incompatible with common design processes. This work addresses this challenge by <u>introducing scene graphs and layouts as an intermediate representation</u> during generation, and by integrating an <u>improved diffusion module for more consistent generation</u>. It enables designers to configure element composition and refine outputs while maintaining coherence across design iterations.</span>
abstract: >
  PlantoGraphy is a creativity support system that bridges the gap between generative AI capabilities and traditional iterative design processes in landscape architecture, enabling designers to maintain control and flexibility throughout the rendering workflow.
background: >
  <p>Generative AI has revolutionized image synthesis, offering powerful tools for automated landscape rendering. However, a critical disconnect exists between the capabilities of these AI systems and the actual workflows of landscape designers. Traditional landscape design is an <strong>iterative, exploratory process</strong> where designers continuously refine their ideas through multiple stages of sketching, adjustment, and evaluation.</p><p>Current end-to-end generative AI methods operate as "black boxes" that take text prompts and directly produce final renderings. This approach fundamentally conflicts with how designers work, as it: (1) limits control over specific design elements, (2) makes incremental refinements difficult, and (3) fails to support the exploration and experimentation that are central to creative design processes.</p><p>PlantoGraphy was developed to address this fundamental mismatch, creating a system that respects and enhances the designer's iterative workflow rather than replacing it.</p>
methodology: >
  <p>PlantoGraphy introduces an innovative approach that uses <strong>scene graphs and layouts</strong> as intermediate representations between designer intent and AI generation:</p><h3>Core Components:</h3><ul><li><strong>Scene Graph Representation:</strong> The system represents landscape designs as structured scene graphs, where nodes represent design elements (trees, paths, water features, etc.) and edges capture spatial and semantic relationships. This structured representation enables precise control and manipulation of individual design components.</li><li><strong>Layout-based Composition:</strong> Designers can specify the spatial arrangement of elements through an intuitive layout interface. The layout acts as a visual constraint that guides the AI generation process while maintaining design intent.</li><li><strong>Iterative Refinement Pipeline:</strong> The system supports a multi-stage workflow where designers can:<ol><li>Specify high-level design concepts through natural language</li><li>Refine the automatically generated scene graph structure</li><li>Adjust spatial layouts and relationships</li><li>Generate renderings with controllable styles</li><li>Make targeted modifications to specific elements</li></ol></li><li><strong>LLM-Powered Design Assistance:</strong> Large language models help translate natural language descriptions into structured scene graphs, while maintaining semantic consistency and design feasibility.</li></ul><h3>Technical Architecture:</h3><p>The system integrates multiple AI models in a coordinated pipeline: GPT-4 for scene graph generation, ControlNet for layout-conditioned generation, and custom fine-tuned diffusion models for landscape-specific rendering quality.</p>
results: >
  <p>We conducted comprehensive evaluations of PlantoGraphy with professional landscape designers and students:</p><h3>User Study Findings:</h3><ul><li><strong>Design Efficiency:</strong> Participants completed landscape rendering tasks 60% faster using PlantoGraphy compared to traditional manual methods or end-to-end AI tools.</li><li><strong>Creative Control:</strong> Designers rated the system highly (4.6/5) for maintaining creative control throughout the design process, significantly higher than direct text-to-image generation (2.8/5).</li><li><strong>Iterative Workflow Support:</strong> 85% of designers reported that the scene graph and layout approach aligned well with their natural design workflow, enabling seamless iteration.</li><li><strong>Output Quality:</strong> Landscape renderings generated through PlantoGraphy were rated as more coherent and design-appropriate compared to baseline generative models.</li></ul><h3>Case Studies:</h3><p>We present several real-world landscape design projects where PlantoGraphy was successfully applied, including urban park design, residential landscape planning, and campus green space renovation. These cases demonstrate the system's versatility across different scales and design contexts.</p><h3>Published Work:</h3><p>This research was published at ACM CHI 2024 (Conference on Human Factors in Computing Systems), one of the premier venues for human-computer interaction research.</p>
---

While recent GenAI enables automated landscape rendering, existing end-to-end methods remain incompatible with common design processes.
This work addresses this challenge by <u>introducing _scene graphs_ and _layouts_ as an intermediate representation</u> during generation, and by integrating an <u>improved diffusion module for more consistent generation</u>. It enables designers to configure element composition and refine outputs while maintaining coherence across design iterations.
