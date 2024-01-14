export const selectedProductsConverter=['all-products','selected-products','forWomen','women-clothes','women-glasses','women-jewelry','women-shoes','women-watches','forMen','men-clothes','men-glasses','men-jewelrt','men-shoes','men-watches','forkids','kid-clothes','kid-shoes'];

export const dataBase={
    //structure explanation//1st value in array to find by gender, 2nd value to fing by sublink, 3rd value product name, 4th price, 5th unist avail, 6th image path. from 7on these are tags
    //0:gender,1:sub-selection,2product name.3.price,4.items avail. 5'img path'.6. all products/
      1:['forkids','kid-clothes','doted t-shirt',22,4,'https://images.unsplash.com/photo-1605286236134-5724adb234b3?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      2:['forkids','kid-clothes','square design',22,8,'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      3:['forkids','kid-clothes','name',22,24,'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      4:['forkids','kid-clothes','name',34,22,'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      5:['forkids','kid-clothes','name',200,24,'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      6:['forkids','kid-clothes','name',200,24,'https://images.unsplash.com/photo-1519457851-06c11d8bfadc?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      7:['forkids','kid-clothes','name',200,24,'https://images.unsplash.com/photo-1594918794521-a0c01cdff8c0?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],

      8:['firkids','kid-shoes','name',22,33,'https://images.unsplash.com/photo-1573309463326-92397f7b730d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      9:['forkids','kid-shoes','name',22,33,'https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      10:['forkids','kid-shoes','name',22,33,'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      11:['forkids','kid-shoes','name',22,33,'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],

      12:['forMen','men-clothes','name',33,44,'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      13:['forMen','men-clothes','name',33,44,'https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      14:['forMen','men-clothes','name',33,44,'https://images.unsplash.com/photo-1563389234808-52344934935c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      15:['forMen','men-clothes','name',33,44,'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      16:['forMen','men-clothes','name',33,44,'https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      17:['forMen','men-clothes','name',33,44,'https://images.unsplash.com/photo-1503341960582-b45751874cf0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      18:['forMen','men-clothes','name',33,44,'https://images.unsplash.com/photo-1589902860314-e910697dea18?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      

      19:['forMen','men-glasses','name',33,44,'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      21:['forMen','men-glasses','name',33,44,'https://images.unsplash.com/photo-1584036553516-bf83210aa16c?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      22:['forMen','men-glasses','name',33,44,'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','selected-products'],
      20:['forMen','men-glasses','name',33,44,'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
    

      22:['forMen','men-jewelry','name',33,44,'https://images.unsplash.com/photo-1612473078715-923c0069e0c2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      23:['forMen','men-jewelry','name',33,44,'https://images.unsplash.com/photo-1628785517892-dbcd2f2719ed?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      24:['forMen','men-jewelry','name',33,44,'https://images.unsplash.com/photo-1623040594055-9afc9b891b04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],

      25:['forMen','men-shoes','TESTTEST',33,44,'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','all-products'],
      26:['forMen','men-shoes','name',33,44,'https://images.unsplash.com/photo-1617143207675-e7e6371f5f5d?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      27:['forMen','men-shoes','name',33,44,'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      28:['forMen','men-shoes','name',33,44,'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1298&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      29:['forMen','men-shoes','name',33,44,'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      30:['forMen','men-shoes','name',33,44,'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      31:['forMen','men-shoes','name',33,44,'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      32:['forMen','men-shoes','name',33,44,'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      33:['forMen','men-shoes','name',33,44,'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],

      34:['forMen','men-watches','name',33,44,'https://images.unsplash.com/photo-1585123334904-845d60e97b29?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      35:['forMen','men-watches','name',33,44,'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=1342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      36:['forMen','men-watches','name',33,44,'https://images.unsplash.com/photo-1525019461548-85e61dd8e83a?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      37:['forMen','men-watches','name',33,44,'https://images.unsplash.com/photo-1524738258074-f8125c6a7588?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','selected-products'],
      38:['forMen','men-watches','name',33,44,'https://images.unsplash.com/photo-1517390947773-a742ed6ce0d9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],

      38:['forWomen','women-clothes','name',33,44,'https://images.unsplash.com/photo-1592020051126-c240d2aaa98b?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      39:['forWomen','women-clothes','name',33,44,'https://images.unsplash.com/photo-1542295669297-4d352b042bca?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      40:['forWomen','women-clothes','name',33,44,'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      41:['forWomen','women-clothes','name',33,44,'https://images.unsplash.com/photo-1520591799316-6b30425429aa?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      42:['forWomen','women-clothes','name',33,44,'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?q=80&w=1341&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','selected-products'],
      43:['forWomen','women-clothes','name',33,44,'https://images.unsplash.com/photo-1616150840617-a0124ea42a1f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      44:['forWomen','women-clothes','name',33,44,'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      45:['forWomen','women-clothes','name',33,44,'https://images.unsplash.com/photo-1522706604291-210a56c3b376?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      45:['forWomen','women-clothes','test',33,44,'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1305&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],

      46:['forWomen','women-glasses','name',33,44,'https://images.unsplash.com/photo-1524255684952-d7185b509571?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      47:['forWomen','women-glasses','name',33,44,'https://images.unsplash.com/photo-1513673054901-2b5f51551112?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      48:['forWomen','women-glasses','name',33,44,'https://images.unsplash.com/photo-1513237726167-2ae8ea985930?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      49:['forWomen','women-glasses','name',33,44,'https://images.unsplash.com/photo-1517256673644-36ad11246d21?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      50:['forWomen','women-glasses','name',33,44,'https://images.unsplash.com/photo-1519362909365-f8591adb630e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],

      51:['forWomen','women-jewelry','name',33,44,'https://images.unsplash.com/photo-1614606140245-2c33ece9e2cf?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      52:['forWomen','women-jewelry','name',33,44,'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      53:['forWomen','women-jewelry','name',33,44,'https://images.unsplash.com/photo-1595370269025-1f070ca29b81?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      54:['forWomen','women-jewelry','name',33,44,'https://images.unsplash.com/photo-1590548784585-643d2b9f2925?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      55:['forWomen','women-jewelry','name',33,44,'https://images.unsplash.com/photo-1601821765780-754fa98637c1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],

      69:['forWomen','women-watches','name',33,44,'https://images.unsplash.com/photo-1528968620-57e0257ff360?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      70:['forWomen','women-watches','name',33,44,'https://images.unsplash.com/photo-1535449425-adc6f5faa71c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      71:['forWomen','women-watches','name',33,44,'https://images.unsplash.com/photo-1534131270927-b0704a572b6f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      72:['forWomen','women-watches','name',33,44,'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1294&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      73:['forWomen','women-watches','name',33,44,'https://plus.unsplash.com/premium_photo-1681150012494-7030abadfd3d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],

      56:['forWomen','women-shoes','name',33,44,'https://images.unsplash.com/photo-1582897085656-c636d006a246?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      57:['forWomen','women-shoes','name',33,44,'https://images.unsplash.com/photo-1596140096558-07b3cd0fd99e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      58:['forWomen','women-shoes','name',33,44,'https://images.unsplash.com/photo-1481729379561-01e43a3e1ed4?q=80&w=1570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      59:['forWomen','women-shoes','name',33,44,'https://images.unsplash.com/photo-1639306425355-7fd84115c249?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      60:['forWomen','women-shoes','name',33,44,'https://images.unsplash.com/photo-1604868189265-219ba7bf7ea3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      61:['forWomen','women-shoes','name',33,44,'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      62:['forWomen','women-shoes','name',33,44,'https://images.unsplash.com/photo-1519255254863-f20ef784aec4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],
      63:['forWomen','women-shoes','name',33,44,'https://images.unsplash.com/photo-1554062614-6da4fa67725a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      64:['forWomen','women-shoes','name',33,44,'https://images.unsplash.com/photo-1519707574798-77140649cfe5?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      65:['forWomen','women-shoes','name',33,44,'https://images.unsplash.com/photo-1559504344-33abd17324d5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      66:['forWomen','women-shoes','name',33,44,'https://images.unsplash.com/photo-1559334417-01b38aec66bd?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      67:['forWomen','women-shoes','name',33,44,'https://images.unsplash.com/photo-1553808373-92b0bcc3af65?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products','selected-products'],
      68:['forWomen','women-shoes','name',33,44,'https://images.unsplash.com/photo-1559513493-8ee89c9e69ee?q=80&w=1344&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','all-products'],

  
}



