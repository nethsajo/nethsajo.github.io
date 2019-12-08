function implement_animate_scroll() {
    window.sr = ScrollReveal();
    sr.reveal("#about--onright-content_one", {
        duration: 2000,
        origin: 'bottom',
        rotate: { x: 90, y: 0, z: 0 },
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
        viewFactor: 0.5
    });

    sr.reveal("#about--onright-content_two", {
        duration: 2000,
        delay: 500,
        origin: 'right',
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
        viewFactor: 0.7
    });

    sr.reveal("#my-sample__projects", {
        duration: 1000,
        delay: 500,
        origin: 'left',
        viewFactor: 0.9
    });
}