
import Zdog from "zzz";

const illo = new Zdog.Illustration({
    element: ".zdog",
    resize: true,
});

new Zdog.Hemisphere({
    addTo: illo,
    diameter: 100,
    stroke: false,
    color: "rgba(17, 11, 13, 1)",
    backface: "rgba(194, 81, 78, 1)",
});

function animate() {
    illo.rotate.y += 0.03;
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}
animate();