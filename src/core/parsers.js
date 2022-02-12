export function parseErrorMessages(fieldsErrorMessages) {
  // DRF의 에러 응답 폼을 처리하기 위한 로직
  // 오브젝트에 필드별로 에러 리스트가 담긴 응답을 처리한다. ex) {'field1': ['error message 1', 'error message 2'], 'field2': [...]}
  Object.entries(fieldsErrorMessages).reduce((acc, [fieldName, errors]) => {
    acc[fieldName] = {
      validateStatus: "error",
      help: errors.join(" ")
    }
    console.log('test: ', fieldName, errors)
    return acc
  }, {})
}