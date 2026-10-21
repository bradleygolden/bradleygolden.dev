# How the thermal half was made (simulated, from the real photo)

Not a real thermal capture, and nothing generated: a per-pixel "temperature" guess from the approved cutout
(skin warm, with hollows warmer and highlights cooler; black cotton warm over the chest, cooler at the edges;
the cap cooler), sensor-like softening (downscale to 360px, small blur, upscale), then a palette built from the
page's own colours (`house.cube`: night, deep blue, violet, rust, heat orange, pale, paper). Script: see
`/Users/bradleygolden/.local/share/runs/2026-10-21-bradleygolden-dev/.build/thermal/` (temp5 map, then the ffmpeg
`lut1d=house.cube` step). When Bradley's real photo arrives, rerun the same steps on it, or better, take a real
thermal photo with a FLIR phone camera and colour it with `house.cube`.
