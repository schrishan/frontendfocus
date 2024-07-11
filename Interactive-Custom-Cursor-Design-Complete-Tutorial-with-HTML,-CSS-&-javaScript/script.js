document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    const cursorInner = document.getElementById('cursorInner');

    if (!cursor || !cursorInner) return;

    const handleMouseMove = (e) => {
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
        cursorInner.style.left = `${e.clientX}px`;
        cursorInner.style.top = `${e.clientY}px`;
    };

    const handleMouseDown = () => {
        cursor.classList.add('click');
        cursorInner.classList.add('cursorinnerhover');
    };

    const handleMouseUp = () => {
        cursor.classList.remove('click');
        cursorInner.classList.remove('cursorinnerhover');
    };

    const handleAnchorHover = () => {
        cursor.classList.add('hover');
    };

    const handleAnchorLeave = () => {
        cursor.classList.remove('hover');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const anchors = document.querySelectorAll('.custom-pointer');
    anchors.forEach((item) => {
        item.addEventListener('mouseover', handleAnchorHover);
        item.addEventListener('mouseleave', handleAnchorLeave);
    });

    // Cleanup event listeners on component unmount
    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);

        anchors.forEach((item) => {
            item.removeEventListener('mouseover', handleAnchorHover);
            item.removeEventListener('mouseleave', handleAnchorLeave);
        });
    };
});
