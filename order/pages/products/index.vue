<template>
  <div class="container">
    <h1
      class="my-4 text-center border-b-2 border-mercos-purple text-mercos-green text-2xl font-bold"
    >
      Produtos Cadastrados
    </h1>
    <div class="w-full">
      <el-table
        :data="tableData"
        style="width: 100%"
        row-class-name="text-mercos-purple font-medium"
        header-row-class-name="text-mercos-green"
      >
        <el-table-column
          class-name="text-mercos-green font-bold"
          prop="id"
          label="ID"
          width="180"
        ></el-table-column>
        <el-table-column prop="name" label="Name"></el-table-column>
        <el-table-column prop="currency" label="Currency"></el-table-column>
        <el-table-column prop="price" label="Price"></el-table-column>
        <el-table-column prop="multiplier" label="Multiplier" width="180">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    tableData: [
      {
        id: '1',
        name: 'Millenium Falcon',
        price: '550.000,00',
        currency: "R$",
        multiplier: '1',
      },
      {
        id: '2',
        name: 'X-Wing',
        price: '60.000,00',
        currency: "R$",
        multiplier: '2',
      },
      {
        id: '3',
        name: 'Super ​Star ​Destroyer',
        price: '4.570.000,00',
        currency: "R$",
        multiplier: '1',
      },
      {
        id: '4',
        name: 'TIE ​Fighter',
        price: '75.000,00',
        currency: "R$",
        multiplier: '2',
      },
      {
        id: '5',
        name: 'Lightsaber',
        price: '6.000,00',
        currency: "R$",
        multiplier: '5',
      },
      {
        id: '6',
        name: 'DLT-19 ​Heavy ​Blaster ​Rifle',
        price: '5.800,00',
        currency: "R$",
        multiplier: '1',
      },
      {
        id: '7',
        name: 'DL-44 ​Heavy ​Blaster ​Pistol',
        price: '1.500,00',
        currency: "R$",
        multiplier: '10',
      },
    ],
    search: '',
  }),
}
</script>
