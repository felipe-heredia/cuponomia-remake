<template>
  <header class="header-wrapper">
    <h2 class="font-['Nunito'] font-extrabold text-2xl">CUPONOMIA</h2>

    <div class="search">
      <input ref="search" placeholder="Busque aqui pela sua loja" class="text" />

      <button class="search-button" @click="$refs.search.focus()">
        <Search :size="22" color="#334155" />
      </button>
    </div>

    <nav class="default-nav">
      <nuxt-link to="" class="link">Lojas</nuxt-link>
      <nuxt-link to="" class="link">Categorias</nuxt-link>
      <nuxt-link to="" class="link">Ajuda</nuxt-link>
    </nav>

    <section class="user">
      <User :size="26" color="#f3f0fd" class="ml-2" />

      <div class="text">
        <small>você tem</small>
        <p>R$ 0,00</p>
      </div>

      <ChevronDown :size="22" color="#f3f0fd" class="ml-2" />
    </section>

    <nav class="mobile">
      <button class="nav-button search">
        <Search :size="22" color="#f1f5f9" />
      </button>

      <button class="nav-button">
        <Hamburger :size="22" color="#f1f5f9" />
      </button>

      <button class="nav-button">
        <User :size="22" color="#f1f5f9" />
      </button>
    </nav>
  </header>
</template>

<script>
import { Search, Menu, User, ChevronDown } from 'lucide-vue'

export default {
  components: { Search, Hamburger: Menu, User, ChevronDown },
}
</script>

<style lang="scss" scoped>
header.header-wrapper {
  @apply flex justify-between md:justify-start items-center bg-victoria-900 w-full h-16 px-4 2xl:px-80;

  div.search {
    @apply hidden md:flex bg-violet-50 mx-12 p-2 w-5/12;

    border-radius: 0.625rem;

    input.text {
      @apply bg-none outline-none bg-violet-50 text-slate-700 w-full;
    }

    button.search-button {
      @apply px-4 py-1 hover:bg-violet-200;

      border-radius: 0.625rem;

      transition: all 1s;
    }
  }

  nav.default-nav {
    @apply hidden md:flex;

    a.link {
      @apply font-['Inter'] font-semibold text-sm px-4 py-3 mx-2 hover:bg-[#71568e];

      transition: all 1s;
      border-radius: 0.625rem;
    }
  }

  section.user {
    @apply hidden md:flex items-center justify-center px-2 py-2 bg-[#71568e] cursor-pointer;

    height: 70%;
    border-radius: 0.625rem;

    div.text {
      @apply flex flex-col w-16 ml-3;

      small {
        margin-top: -5px;
        font-size: 0.625rem;
      }

      p {
        line-height: 0.5;
        font-weight: bold;
        font-size: 1rem;
      }
    }
  }

  nav.mobile {
    @apply flex md:hidden;

    button.search {
      background-color: #796095;

      &:hover {
        background-color: lighten(#796095, 10);
      }
    }

    button.nav-button {
      @apply p-2 mx-2 cursor-pointer;

      border: 2px solid #796095;

      border-radius: 0.625rem;
      transition: all 1s;
    }
  }
}
</style>
