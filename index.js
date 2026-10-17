const projects = [
      { title: "Say less. Mean more.", desc: "A sample edit for a creator / personal brand. I focused on making the message clear with clean pacing and purposeful motion graphics." },
      { title: "The value is in the details", desc: "An educational short-form concept using minimal graphic emphasis to make a key point easier to understand. Replace with your actual video and project details." },
      { title: "Build with intention", desc: "A creator-focused edit concept with breathing room, intentional pacing, and subtle sound design. Replace with your actual video sample." },
      { title: "Stop chasing attention", desc: "A text-led talking-head concept where graphics reinforce the message instead of competing with it. Replace with your actual edit and client details." }
    ];
    const modal = document.getElementById('projectModal');
    const modalPlaceholder = document.getElementById('modalPlaceholder');
    document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => { const p = projects[Number(button.dataset.project)]; document.getElementById('modalTitle').textContent = p.title; document.getElementById('modalDesc').textContent = p.desc; modalPlaceholder.hidden = false; modal.classList.add('open'); document.getElementById('closeModal').focus(); }));
    function closeModal() { modal.classList.remove('open'); }
    document.getElementById('closeModal').addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });