const destroyTestDb = async() => {
      //delete the file
        await Bun.file('test.sqlite').delete()

        console.log("Test Database Destroyed!!")
}

destroyTestDb()