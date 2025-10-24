<div class="p-6 max-w-6xl mx-auto">
    <!-- Filtros -->
    <div class="mb-6 flex flex-wrap gap-3 items-center">
        <input type="date" id="filtroData" class="border rounded-lg px-3 py-2 text-sm w-48">
        <select id="filtroTipo" class="border rounded-lg px-3 py-2 text-sm w-48">
            <option value="">Todos os tipos</option>
            <option value="requisicao">Requisição</option>
            <option value="transferencia">Transferência</option>
        </select>
        <button onclick="filtrarCards()" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
            Filtrar
        </button>
    </div>
 
    <!-- Cards -->
    <?php if (!empty($dados['dadosTabela'])): ?>
        <?php foreach ($dados['dadosTabela'] as $row): ?>
 
            <?php if (!empty($row['is_deleted']) && $row['is_deleted'] == 1)
                continue; ?>
 
            <div class="bg-white shadow-lg rounded-2xl p-5 border border-gray-200" id="card-<?= esc($row['cod_requisicao']) ?>"
                data-dataemissao="<?= esc($row['data_emissao']) ?>" data-tipo="<?= esc($row['tipo_requisicao']) ?>">
 
                <div class="flex justify-between items-center mb-3">
                    <h2 class="text-lg font-semibold text-gray-800">
                        #<?= esc($row['cod_requisicao']) ?> - <?= ucfirst(esc($row['tipo_requisicao'])) ?>
                    </h2>
                    <?php if ($row['concluida'] == 1): ?>
                        <span class="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Concluída</span>
                    <?php elseif ($row['aprovacao'] == 0): ?>
                        <span class="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Aguardando
                            Aprovação</span>
                    <?php else: ?>
                        <span class="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">Em Aberto</span>
                    <?php endif; ?>
                </div>
 
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                    <p><strong>Data:</strong> <?= esc($row['data_emissao']) ?></p>
                    <p><strong>Setor:</strong> <?= esc($row['desc_setor'] ?: $row['setor']) ?></p>
                    <p><strong>C.Custo:</strong> <?= esc($row['n_ccusto']) ?></p>
                    <p><strong>Produto:</strong> <?= esc($row['cod_produto']) ?>
                        <?= esc($row['desc_produto']) ? '— ' . esc($row['desc_produto']) : '' ?>
                    </p>
                    <p><strong>Qtd. Requisitada:</strong> <?= esc($row['qtd_requisitada']) ?></p>
 
                    <?php if ($row['concluida'] == 1): ?>
                        <p><strong>Qtd. Entregue:</strong> <?= esc($row['qtd_entregue']) ?></p>
                    <?php endif; ?>
 
                    <p><strong>Requisitante:</strong> <?= esc($row['nome_requisitante']) ?></p>
                </div>
 
                <div class="mt-4 flex justify-end gap-2">
                    <a href="<?= site_url('requisicoes/requisitante/ver/' . (int) $row['cod_requisicao']) ?>"
                        class="px-3 py-1 bg-gray-100 rounded text-gray-800 text-sm hover:bg-gray-200">Detalhes</a>
 
                    <!-- FORMULÁRIO TRADICIONAL DE EXCLUIR (FORA do form principal) -->
                    <?php if ($row['concluida'] == 0): ?>
                        <form action="<?= site_url('requisicoes/requisitante/deletar/' . (int) $row['cod_requisicao']) ?>"
                            method="post"
                            onsubmit="return confirm('Confirma excluir a requisição #<?= esc($row['cod_requisicao']) ?>?');"
                            class="inline-block">
                            <?= csrf_field() ?>
                            <button type="submit" class="px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200">
                                Excluir
                            </button>
                        </form>
 
                    <?php endif; ?>
                </div>
            </div>
 
        <?php endforeach; ?>
    <?php else: ?>
        <div class="col-span-full text-center text-gray-500 text-sm">Nenhuma requisição encontrada.</div>
    <?php endif; ?>