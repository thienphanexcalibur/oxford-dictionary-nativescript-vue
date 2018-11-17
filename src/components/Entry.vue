<template>
    <Page class="page">
      <ActionBar class="action-bar" title="No Bullshit Dictionary">
      </ActionBar>

        <TabView class="tab">
          <TabViewItem title="Look-up">
            <StackLayout>
              <SearchBar hint="Search for words" @submit="find" v-model="searchInput" marginTop="10"/>

              <ScrollView>
                  <StackLayout>
                    <ActivityIndicator v-if="loading" :busy="loading" marginTop="80"/>
                    <template v-else v-for="entry in results.results">
                      <Label :textWrap="true" :marginLeft="15" :marginTop="10">
                        <FormattedString>
                          <Span :text="entry.word" style="font-weight:500; font-size: 23px; color: black;"/>
                        </FormattedString>
                      </Label>
                    </template>
                  </StackLayout>
              </ScrollView>
            </StackLayout>
          </TabViewItem>

          <TabViewItem class="tab" title="History">
            <StackLayout>

            </StackLayout>
          </TabViewItem>
    </TabView>
    </Page>
</template>


<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    data () {
      return {
        searchInput: '',
        loading: false
      };
    },

    computed: {
      ...mapState({
          results: state => state.results
      })
    },

    methods: {
      ...mapActions({
        'search': 'searchWords'
      }),

      async find () {
        this.loading = true;
        if (this.searchInput) {
          await this.search(this.searchInput);
        }
        this.loading = false;
      }
    }
  };
</script>

<style scoped>
</style>
