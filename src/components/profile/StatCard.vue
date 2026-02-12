<template>
    <div class="col">
        <div class="card stat-card h-100">
            <div class="card-body">

                <!-- Header -->
                <div class="stat-label text-secondary  mb-2">
                    <i :class="`bi ${icon}`"></i>
                    <span>{{ label }}</span>
                </div>

                <!-- Value -->
                <div class="stat-value text-light">
                    {{ value }}
                </div>

                <!-- Extra info -->
                <div v-if="extra" class="stat-extra">
                    {{ extra }}
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    icon: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    value: {
        type: [String, Number],
        required: true
    },
    extra: {
        type: String,
        default: ''
    }
})
</script>

<style scoped>
.stat-card {
    background: #121414;
    border: 1px solid rgba(255, 255, 255, .05);
    border-radius: 16px;
    transition: all .25s ease;
}

.stat-card:hover {
    transform: translateY(-4px);
    border-color: rgba(0, 255, 255, .25);
    box-shadow: 0 10px 25px rgba(0, 255, 255, .08);
}

/* Label superior */
.stat-label {
    font-size: .90rem;
    text-transform: uppercase;
    letter-spacing: .08em;
    opacity: .6;
    display: flex;
    align-items: center;
    gap: 6px;
}

.stat-label i {
    color: #00ffff;
}

/* Valor principal */
.stat-value {
    font-size: 1.9rem;
    font-weight: 600;
    line-height: 1.1;
}

/* Texto inferior */
.stat-extra {
    font-size: .7rem;
    margin-top: 4px;
    color: #00ffff;
    opacity: .8;
    font-weight: 600;
}
</style>
