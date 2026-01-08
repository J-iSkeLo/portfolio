<script setup lang="ts">
import type { Product as ProductType } from '@/types'
import { ref } from 'vue'
import products from '@/modules/products'
import playButtonImage from '@/assets/img/google-play-button.webp'
import Section from '@/components/Section/Section.vue'
import ProductImage from '@/components/ProductImage.vue'

const selectedProduct = ref<ProductType>(products[0])
</script>

<template>
    <div class="lg:px-7" id="portfolio">
        <Section title="Portfolio">
            <div class="container">
                <!-- Buttons -->
                <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <button
                        v-for="product in products"
                        :key="product.id"
                        :class="[
                            'w-full bg-gradient bg-gradient-to-br py-2 px-3 lg:py-3 lg:px-5 rounded-full border border-gray-100 shadow-lg transition-shadow hover:shadow-xl duration-500 !outline-none focus:outline-none focus:ring-transparent',
                            product.id === selectedProduct.id
                                ? '!border-main from-secondary to-main text-white'
                                : 'from-gray-100 via-gray-50 to-white'
                        ]"
                        @click="selectedProduct = product"
                    >
                        <span class="drop-shadow-md">
                            {{ product.title }}
                        </span>
                    </button>
                </div>

                <!-- Intro -->
                <div class="pt-14 pb-8 text-lg lg:text-xl max-w-5xl mx-auto text-center leading-8 text-gray-600">
                    {{ selectedProduct.intro }}

                    <div v-if="selectedProduct.link" class="text-center mt-6">
                        <a
                            :href="selectedProduct.link"
                            class="hover:scale-105 transition-transform duration-300 mx-auto inline-block"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                :src="playButtonImage"
                                alt="Google Play Button"
                                class="w-56 drop-shadow-md"
                            />
                        </a>
                    </div>
                </div>

                <!-- Items -->
                <div class="min-h-[450px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-6">
                    <template v-for="product in products" :key="product.id">
                        <ProductImage
                            v-for="img in product.items"
                            :key="img"
                            :product
                            :is-selected="selectedProduct.id === product.id"
                            :img
                        />
                    </template>
                </div>
            </div>
        </Section>
    </div>
</template>
