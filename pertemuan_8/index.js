/*
1. Buatlah object dengan nama account dengan 2 properti, yaitu:
        name bertipe data String
        expenses bertipe data array
2. Buatlah function dengan nama addExpenses() dimana function tersebut menerima 2 argument yaitu description dan amount. 
    Masukan kedua argument tersebut ke dalam object dan dengan  menggunakan method push(), tambahkan object tersebut ke dalam 
    properti expenses pada object account yang dibuat di nomor 1
3. Buatlah function dengan nama getAccountSummary(). Function ini tidak memiliki argument. Dengan menggunakan forEach hitung 
    totalExpense pada properti expenses, dengan menjumlahkan semua amount pada object yg dibuat di nomor 2. 
    Tampilkan menggunakan console log dengan tampilan sebagai berikut 'Total pengeluaran <name> adalah Rp.<total expenses>'.
4. Panggil fungsi addExpenses dan getAccountSummary.
      Contohnya:
        addExpenses('Beli Makanan', 15000);
        addExpenses('Ongkos', 30000)
       getAccountSummary(); //Output: Total pengeluaran John adalah Rp. 45000
*/

const account = {
    name: 'John',
    expenses: [],
    addExpenses: function(description, amount) {
        this.expenses.push({"description": description, "amount": amount});
    },
    getAccountSummary: function() {
        let totalExpenses = 0;
        this.expenses.forEach(function(el) {
            totalExpenses += el.amount;
        });

        return totalExpenses;
    }
};

account.addExpenses('Beli Makanan', 15000);
account.addExpenses('Ongkos', 30000);
account.getAccountSummary();
console.log('Total pengeluaran ' +account.name+ ' adalah Rp ' +account.getAccountSummary()+ '.');