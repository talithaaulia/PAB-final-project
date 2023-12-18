import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const EdamamRecipeApp = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const app_id = '9631526f';
      const app_key = 'd26b50691432dfec98de8de1a0f1eeb7';

      // const url = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${app_id}&app_key=${app_key}&field=uri`;
      // const params = {
      //   type: 'public',
      //   q: 'chicken'
      // };

    
  //     try {
  //       // const response = await fetch(`${url}?${new URLSearchParams(params)}`);
  //       const response = await fetch(`${url}`);

  //       if (response.status === 200) {
  //         const data = await response.json();
  //         console.log('point masuk sini 1');
  //         const recipesData = data?.hits?.map((hit) => hit?.recipe);
  //         // console.log('receipt data ->>', recipesData);
  //         setRecipes(recipesData);
  //         console.log('isi receipt >> ',recipes)
  //         array.forEach(element => {
            
  //         });
  //       } else if (response.status === 400 || response.status === 403) {
  //         const errorData = await response.json();
  //         console.error('API Error:', errorData);
  //         // Handle errors for status codes 400 and 403
  //       } else {
  //         console.error(`Gagal melakukan permintaan API. Kode status: ${response.status}`);
  //       }
  //     } catch (error) {
  //       console.error('Terjadi kesalahan:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const initialUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${app_id}&app_key=${app_key}&field=uri`;

      try {
        const initialResponse = await fetch(initialUrl);
        const initialData = await initialResponse.json();

        if (initialResponse.status === 200) {
          const initialRecipesData = initialData?.hits?.map((hit) => hit?.recipe) || [];
          // setRecipes(initialRecipesData);

          // Fetch additional data for a specific recipe (for example, the first one)
          if (initialRecipesData.length > 0) {
            const firstRecipe = initialRecipesData[0];
            await fetchAdditionalData(firstRecipe.uri);
          }
        } else {
          console.error('Error fetching initial data:', initialData);
        }
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
    };

    fetchData();
  }, []);

  const fetchAdditionalData = async (recipeUri) => {
    console.log('Receipt Url >> ',recipeUri)
    const app_id = '9631526f';
    const app_key = 'd26b50691432dfec98de8de1a0f1eeb7';
    const additionalUrl = `https://api.edamam.com/api/recipes/v2/8275bb28647abcedef0baaf2dcf34f8b?type=public&app_id=9631526f&app_key=d26b50691432dfec98de8de1a0f1eeb7`;

    try {
      const response = await fetch(additionalUrl);
      const data = await response.json();

      if (response.status === 200) {
        console.log('data resep',data.recipe)
        setRecipes(data.recipe);
       console.log('ISI Resep ',recipes)
      } else {
        console.error('Error fetching additional data:', data);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat mengambil data tambahan:', error);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resep Edamam:</Text>
      {/* <ScrollView style={styles.scrollView}>
        {recipes.map((recipe, index) => (         
          <View key={index} style={styles.recipeContainer}> */}
            <Text style={styles.recipeName}>{recipes.label}</Text>
            <Image style={styles.recipeImage} source={{ uri: recipes.image }} />
            <Text style={styles.recipeLink}>Link Resep: {recipes.url}</Text>
            <View style={styles.divider} />
          {/* </View>
        ))}
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#3498db',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  recipeContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  recipeImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  recipeLink: {
    fontSize: 16,
    color: '#3498db',
  },
  divider: {
    height: 1,
    backgroundColor: '#BDC3C7',
    marginVertical: 8,
  },
});

export default EdamamRecipeApp;
