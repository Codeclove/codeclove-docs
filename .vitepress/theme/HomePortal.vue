<template>
  <div class="home-portal">
    <div class="portal-header">
      <div class="portal-badge">Official Documentation</div>
      <h1 class="portal-title">CodeClove Documentation</h1>
      <p class="portal-tagline">Installation, setup guides, and technical references for Nexora and HR Press.</p>
    </div>

    <div class="portal-grid">
      <!-- Nexora Product Card -->
      <div class="portal-card">
        <div class="card-header-row">
          <div class="card-icon-box">
            <img src="/icons/nexora.svg" alt="Nexora" width="24" height="24" />
          </div>
          <span class="card-category-badge">School ERP</span>
        </div>
        
        <h2 class="card-product-title">Nexora</h2>
        <p class="card-product-desc">Self-hosted school information system. Manage academic sessions, timetable scheduling, admissions, attendance, and fee invoicing.</p>

        <div class="card-links-list">
          <div class="card-links-heading">Popular Guides</div>
          <a href="/nexora/installation" class="card-link-item">
            <span>Installation &amp; License Activation</span>
            <span class="card-link-arrow">&rarr;</span>
          </a>
          <a href="/nexora/academic-setup" class="card-link-item">
            <span>Academic Sessions &amp; Board Presets</span>
            <span class="card-link-arrow">&rarr;</span>
          </a>
          <a href="/nexora/admissions" class="card-link-item">
            <span>Student Admissions Pipeline</span>
            <span class="card-link-arrow">&rarr;</span>
          </a>
          <a href="/nexora/fee-management" class="card-link-item">
            <span>Fee Structures &amp; Invoicing</span>
            <span class="card-link-arrow">&rarr;</span>
          </a>
        </div>

        <div class="card-action-bar">
          <a href="/nexora/" class="card-main-btn">Open Nexora Docs &rarr;</a>
        </div>
      </div>

      <!-- HR Press Product Card -->
      <div class="portal-card">
        <div class="card-header-row">
          <div class="card-icon-box">
            <img src="/icons/hr-press.svg" alt="HR Press" width="24" height="24" />
          </div>
          <span class="card-category-badge" style="color:#a855f7; background:rgba(168,85,247,0.1); border-color:rgba(168,85,247,0.2);">HR Management</span>
        </div>
        
        <h2 class="card-product-title">HR Press Pro</h2>
        <p class="card-product-desc">Self-hosted human resource management. Manage employee directories, departments, work shifts, leave policies, attendance tracking, and payroll.</p>

        <div class="card-links-list">
          <div class="card-links-heading">Popular Guides</div>
          <a href="/hr-press/installation" class="card-link-item">
            <span>Installation &amp; License Activation</span>
            <span class="card-link-arrow">&rarr;</span>
          </a>
          <a href="/hr-press/organization-setup" class="card-link-item">
            <span>Departments &amp; Designations</span>
            <span class="card-link-arrow">&rarr;</span>
          </a>
          <a href="/hr-press/leave-management" class="card-link-item">
            <span>Leave Types &amp; Approval Workflows</span>
            <span class="card-link-arrow">&rarr;</span>
          </a>
          <a href="/hr-press/attendance-tracking" class="card-link-item">
            <span>Daily Web Attendance &amp; Shifts</span>
            <span class="card-link-arrow">&rarr;</span>
          </a>
        </div>

        <div class="card-action-bar">
          <a href="/hr-press/" class="card-main-btn">Open HR Press Docs &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</template>
