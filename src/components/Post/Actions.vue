<template>
    <div class="actions">
        <button>
            <i class="bi bi-hand-thumbs-up"></i>
            <p>Curtir</p>
        </button>
        <button>
            <i class="bi bi-bookmark"></i>
            <p>Salvar</p>
        </button>
        <button>
            <i class="bi bi-tag"></i>
            <p>Marcar</p>
        </button>
        <button>
            <i class="bi bi-controller"></i>
            <p>Questoes</p>
        </button>
        <button>
            <i class="bi bi-share"></i>
            <p>Compartilhar</p>
        </button>
    </div>
</template>


<style lang="scss">
    .actions{
        display: flex;
        flex-direction: row;
        gap: 10px;

        button{
            padding: 10px;
            font-size: 40px;
            color: white;
            background-color: #151515;
            border: none;
            cursor: pointer;

            p{
                font-size: 15px;
            }
        }
    }
</style>