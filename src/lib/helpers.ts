export function prepareServerError(error: string){
    return {
      success: false,
      errors: error??'Internal Server Error'
    }
  }