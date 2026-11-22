---
layout: notebook
title: about
permalink: /
recent_news:
  - date: "11/2026"
    date_source: "User-confirmed acceptance; https://2027.eacl.org/calls/papers/"
    paper_type: survey
    paper_title: Complex Feedback Survey
    paper_url: https://www.preprints.org/manuscript/202608.0674
    venue: Findings of EACL 2027
  - date: "11/2026"
    date_source: "Announced in November 2026, as confirmed by the user; https://openreview.net/group?id=aclweb.org/ACL/ARR/2026/October/Area_Chairs"
    text: 'Serving as an Area Chair for the <a href="https://openreview.net/group?id=aclweb.org/ACL/ARR/2026/October/Area_Chairs">October 2026 cycle of ACL Rolling Review (ARR)</a>.'
  - date: "09/2026"
    date_source: "User-provided LinkedIn profile; https://neurips.cc/Conferences/2026/Dates"
    paper_title: OTROPE
    paper_url: https://arxiv.org/abs/2609.36264
    venue: NeurIPS 2026
  - date: "09/2026"
    date_source: "User-confirmed acceptance; https://jmlr.org/tmlr/papers/"
    paper_title: DP3O
    paper_url: https://arxiv.org/abs/2609.06893
    venue: TMLR
  - date: "07/2026"
    date_source: "User-confirmed PhD completion before joining Alibaba; LinkedIn confirms Alibaba start in Jul 2026. Date refers to the job start."
    text: "After finishing my PhD in Statistics at UC Irvine, I start as an Applied Scientist on the Accio team at Alibaba, working on agentic post-training."
  - date: "04/2026"
    date_source: "https://icml.cc/Conferences/2026/Dates"
    paper_title: RACER
    paper_url: https://openreview.net/forum?id=NoP2UQymHU
    venue: ICML 2026
  - date: "04/2026"
    date_source: "https://2026.aclweb.org/calls/main_conference_papers/"
    paper_title: Beyond the Singular
    paper_url: https://arxiv.org/abs/2502.08943
    venue: Findings of ACL 2026
  - date: "08/2025"
    date_source: "https://2025.emnlp.org/calls/main_conference_papers/"
    paper_title: Recognizing Limits
    paper_url: https://arxiv.org/abs/2408.05873
    venue: Findings of EMNLP 2025
  - date: "07/2025"
    date_source: "https://groups.google.com/g/tmlr-announce-daily/c/OvbNISIOQbY"
    paper_title: Where to Intervene
    paper_url: https://openreview.net/forum?id=D3au9XkWuy
    venue: TMLR
  - date: "06/2025"
    date_source: "User-provided LinkedIn experience: Jun 2025 – Sep 2025"
    text: "Start as an Applied Scientist Intern at Amazon."
  - date: "06/2024"
    date_source: "assets/pdf/cv.pdf at git revision 1b29ad73 (2024-10-09)"
    text: "Start as a Research Scientist Intern at Meta."
  - date: "04/2023"
    date_source: "https://icml.cc/Conferences/2023/Dates"
    paper_title: Causal Rationalization
    paper_url: https://proceedings.mlr.press/v202/zhang23ap.html
    venue: ICML 2023
  - date: "06/2022"
    date_source: "assets/pdf/cv.pdf at git revision 1b29ad73 (2024-10-09)"
    text: "Start as a Machine Learning Research Intern at IQVIA."
---

<h2><svg class="section-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#icon-greeting"/></svg>Hi!</h2>
<p>Welcome! I am an <strong>Applied Scientist on the Accio team at Alibaba</strong>, working on <strong>agentic post-training</strong>. Previously, I interned at Amazon, Meta, and IQVIA.</p>
<p>I received my PhD in Statistics from the <a href="https://www.stat.uci.edu/">University of California, Irvine</a>, advised by <a href="https://hengruicai.github.io/">Prof. Hengrui Cai</a>. I previously studied Biostatistics as a master's student at the <a href="https://www.biostat.washington.edu/">University of Washington</a> and received my BSc in Applied Mathematics from <a href="https://www.xjtlu.edu.cn/en/">Xi’an Jiaotong-Liverpool University</a>.</p>

<h2 id="research"><svg class="section-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#icon-research"/></svg>Research Interests</h2>
<p>My research focuses on developing capable and trustworthy language models and agents. I am particularly interested in:</p>
<ul>
  <li><strong>Agentic post-training</strong>, with a focus on long-horizon reinforcement learning, supervised fine-tuning, and on-policy distillation.</li>
  <li><strong>Evaluation:</strong> reliable and cost-efficient evaluation of LLM agents.</li>
  <li><strong>Trustworthy AI:</strong> uncertainty quantification and interpretability.</li>
</ul>

<aside class="news-callout" id="news" aria-labelledby="news-heading">
  <svg class="section-icon news-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#icon-news"/></svg>
  <div class="news-content">
    <div class="news-heading"><h3 id="news-heading">Recent News</h3><span>Newest first</span></div>
    <div class="news-scroll" role="region" aria-label="Recent news, newest first" tabindex="0">
    {%- if page.recent_news.size > 0 -%}
    <ul class="news-list">
      {%- for item in page.recent_news -%}
      <li><strong>{{ item.date }}:</strong> {% if item.paper_url %}Our {{ item.paper_type | default: 'paper' }} <a href="{{ item.paper_url | escape }}">{{ item.paper_title | escape }}</a> is accepted to {{ item.venue | escape }}.{% else %}{{ item.text }}{% endif %}</li>
      {%- endfor -%}
    </ul>
    {%- else -%}
    <p class="news-placeholder">Updates coming soon.</p>
    {%- endif -%}
    </div>
  </div>
</aside>

<h2 id="publications"><svg class="section-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#icon-publications"/></svg>Selected Publications</h2>
<p class="section-note">See <a href="{{ '/publications/' | relative_url }}">all publications</a> or my <a href="https://scholar.google.com/citations?user=7IV2H5IAAAAJ">Google Scholar</a> profile for the full list. <span>(* equal contribution)</span></p>
<div class="publications">
{% bibliography --group_by none --template notebook_bib --query @*[selected=true]* %}
</div>

<h2 id="experience"><svg class="section-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#icon-experience"/></svg>Industry Experience</h2>
<div class="timeline">
{% for section in site.data.cv %}{% if section.title == 'Experience' %}{% for item in section.contents %}
  <div class="timeline-item">
    <div class="timeline-title"><span>{{ item.institution }}</span><time>{{ item.year | capitalize }}</time></div>
    <p>{{ item.title }}</p>
    {% if item.supervisors %}<p class="supervisors">Supervised by {% for supervisor in item.supervisors %}{% unless forloop.first %}{% if forloop.last %} and {% else %}, {% endif %}{% endunless %}{% if supervisor.url %}<a href="{{ supervisor.url }}">{{ supervisor.name }}</a>{% else %}{{ supervisor.name }}{% endif %}{% endfor %}.</p>{% endif %}
  </div>
{% endfor %}{% endif %}{% endfor %}
</div>

<h2 id="service"><svg class="section-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#icon-service"/></svg>Academic Service</h2>
<ul class="service-list">
  <li><strong>Area Chair</strong>, <a href="https://openreview.net/group?id=aclweb.org/ACL/ARR/2026/October/Area_Chairs">ACL Rolling Review (ARR), October 2026</a>.</li>
  <li><strong>Conference Reviewer</strong>: ICML, NeurIPS, ICLR, AISTATS.</li>
  <li><strong>Journal Reviewer</strong>: TMLR, JASA.</li>
</ul>

<h2 id="education"><svg class="section-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#icon-education"/></svg>Education</h2>
<div class="timeline">
{% for section in site.data.cv %}{% if section.title == 'Education' %}{% for item in section.contents %}
  <div class="timeline-item">
    <div class="timeline-title"><span>{{ item.institution }}</span><time>{{ item.year | replace: '-now', '–present' | replace: '-', '–' }}</time></div>
    <p>{{ item.title }}</p>
  </div>
{% endfor %}{% endif %}{% endfor %}
</div>
