<template>
    <div class='overflow-y-hidden cursor-move' style='height: 36rem'  v-dragscroll>
        <div class="timeline">
            <div :key="index" v-for="index in 3" class="timeline-container primary">
                <div class="timeline-icon">
                    <i class="far fa-grin-wink"></i>
                </div>
                <div class="timeline-body">
                    <h4 class="timeline-title">- Founder & Lead Developer</h4>
                    <p>
                        since 2017, I started lots of startups such as Parsian
                        Servers, Antnet Advertisement network, SpyGuard Academy,
                        MarketeMan, 4RD(Ford) SSM Panel, Rayven (SSM Panel
                        Marketplace) and etc which has up and downs but it makes my
                        best experiences.
                    </p>
                    <p class="timeline-subtitle">(2017 - Present)</p>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="postcss" scoped>
.timeline {
    widows: 100%;
    position: relative;
    padding-left: 4rem;
    margin: 0 0 0 30px;
    color: white;
}
.timeline:before {
    content: "";
    position: absolute;
    left: 15px;
    top: 5px;
    width: 3px;
    height: 93%;
    border-left: 3px dotted var(--primary-color);
    /* background: var(--primary-color); */
}
.timeline .timeline-container {
    position: relative;
    margin-bottom: 2.5rem;
}
.timeline .timeline-container .timeline-icon {
    position: absolute;
    left: -74px;
    top: 4px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    font-size: 2rem;
    background: var(--primary-color);
}
.timeline .timeline-container .timeline-icon i {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.timeline .timeline-container .timeline-icon img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.timeline .timeline-container .timeline-body {
    color: black;
    background: transparent;
    border-radius: 3px;
    padding: 20px 20px 15px;
    /* box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.1); */
}
.timeline .timeline-container .timeline-body:before {
    content: "";
    background: inherit;
    width: 100%;
    height: 20px;
    display: block;
    position: absolute;
    left: -10px;
    transform: rotate(45deg);
    border-radius: 0 0 0 2px;
}
.timeline .timeline-container .timeline-body .timeline-title {
    margin-bottom: 1rem;
    font-weight: bold;
}

.timeline .timeline-container .timeline-body .timeline-subtitle {
    font-weight: 300;
    font-style: italic;
    opacity: 0.4;
    margin-top: 12px;
    font-size: 11px;
}
</style>
